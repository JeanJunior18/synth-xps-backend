import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateTimbreDto } from './dto/create-timbre.dto';
import { UpdateTimbreDto } from './dto/update-timbre.dto';
import { TimbreRepositoryPort } from 'src/timbre/repository/timbre.repository.port';
import { Timbre } from 'src/timbre/entities/timbre.entity';

@Injectable()
export class TimbreService {
  constructor(private readonly repository: TimbreRepositoryPort) {}

  create(createTimbreDto: CreateTimbreDto, userId: string): Promise<Timbre> {
    const timbre = Timbre.createFromDto(createTimbreDto);
    timbre.contributorId = userId;
    return this.repository.create(timbre);
  }

  findAll(filter: Partial<Timbre> = {}) {
    return this.repository.findAll(filter);
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateTimbreDto: UpdateTimbreDto) {
    throw new NotImplementedException(id, updateTimbreDto);
  }

  remove(id: string) {
    throw new NotImplementedException(id);
  }
}
