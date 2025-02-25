import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimbreLikeDto } from 'src/timbre-like/dto/create-timbre-like.dto';
import { TimbreLike } from 'src/timbre-like/entities/timbre-like.entity';
import { TimbreLikeRepositoryPort } from 'src/timbre-like/repository/timbre-like.repository.port';
import { TimbreService } from 'src/timbre/timbre.service';

@Injectable()
export class TimbreLikeService {
  constructor(
    private readonly repository: TimbreLikeRepositoryPort,
    private readonly timbreService: TimbreService,
  ) {}

  async addLike(createTimbreLikeDto: CreateTimbreLikeDto, userId: string) {
    const timbreId = createTimbreLikeDto.timbreId;
    const timbre = await this.timbreService.findOne(timbreId);
    if (!timbre) throw new NotFoundException();

    const existentTimbreLike = await this.repository.findByTimbreIdAndUserId(
      timbreId,
      userId,
    );
    if (existentTimbreLike) return;

    const timbreLike = new TimbreLike();
    timbreLike.timbreId = timbreId;
    timbreLike.userId = userId;
    timbreLike.createdAt = new Date();

    await this.repository.create(timbreLike);

    const likes = await this.repository.countByTimbreId(timbreId);
    await this.timbreService.changeLikeCount(timbreId, likes);
  }

  findAllByTimbreId(timbreId: string) {
    return this.repository.findAllByTimbreId(timbreId);
  }

  removeLike(id: string) {
    return this.repository.remove(id);
  }
}
