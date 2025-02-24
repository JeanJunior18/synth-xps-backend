import { Injectable } from '@nestjs/common';
import { CreateTimbreDto } from './dto/create-timbre.dto';
import { UpdateTimbreDto } from './dto/update-timbre.dto';

@Injectable()
export class TimbreService {
  create(createTimbreDto: CreateTimbreDto) {
    return 'This action adds a new timbre';
  }

  findAll() {
    return `This action returns all timbre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timbre`;
  }

  update(id: number, updateTimbreDto: UpdateTimbreDto) {
    return `This action updates a #${id} timbre`;
  }

  remove(id: number) {
    return `This action removes a #${id} timbre`;
  }
}
