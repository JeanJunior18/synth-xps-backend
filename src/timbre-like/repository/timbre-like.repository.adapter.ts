import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimbreLike } from 'src/timbre-like/entities/timbre-like.entity';
import { TimbreLikeRepositoryPort } from 'src/timbre-like/repository/timbre-like.repository.port';

export class TimbreLikeRepositoryAdapter implements TimbreLikeRepositoryPort {
  constructor(
    @InjectModel(TimbreLike.name)
    private readonly timbreLikeModel: Model<TimbreLike>,
  ) {}

  async create(timbreLike: TimbreLike): Promise<void> {
    await new this.timbreLikeModel(timbreLike).save();
  }

  async findAllByTimbreId(timbreId: string): Promise<TimbreLike[]> {
    return (await this.timbreLikeModel.find({ timbreId }).exec()).map(
      (timbreLike) => timbreLike.toObject({ getters: true }),
    );
  }

  async findByTimbreIdAndUserId(
    timbreId: string,
    userId: string,
  ): Promise<TimbreLike | null> {
    return (
      (
        await this.timbreLikeModel.findOne({ timbreId, userId }).exec()
      )?.toObject({ getters: true }) ?? null
    );
  }

  async remove(id: string): Promise<void> {
    await this.timbreLikeModel.findByIdAndDelete(id).exec();
  }

  async countByTimbreId(timbreId: string): Promise<number> {
    return this.timbreLikeModel.countDocuments({ timbreId }).exec();
  }
}
