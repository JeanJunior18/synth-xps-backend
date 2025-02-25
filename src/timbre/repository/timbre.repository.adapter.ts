import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Timbre } from 'src/timbre/entities/timbre.entity';
import { TimbreRepositoryPort } from 'src/timbre/repository/timbre.repository.port';

export class TimbreRepositoryAdapter implements TimbreRepositoryPort {
  constructor(
    @InjectModel(Timbre.name) private readonly timbreModel: Model<Timbre>,
  ) {}

  async create(timbre: Timbre): Promise<Timbre> {
    const createdTimbre = new this.timbreModel(timbre);
    return (await createdTimbre.save()).toObject({ getters: true });
  }

  async findById(id: string): Promise<Timbre | null> {
    if (!isValidObjectId(id)) return null;

    return (
      (await this.timbreModel.findById(id).exec())?.toObject({
        getters: true,
      }) ?? null
    );
  }

  async findAll(filter: Partial<Timbre> = {}): Promise<Timbre[]> {
    return (await this.timbreModel.find(filter).exec()).map((timbre) =>
      timbre.toObject({ getters: true }),
    );
  }

  async updateById(
    id: string,
    timbre: Partial<Timbre>,
  ): Promise<Timbre | null> {
    if (!isValidObjectId(id)) return null;

    return (
      (
        await this.timbreModel
          .findByIdAndUpdate(id, { $set: timbre }, { new: true })
          .exec()
      )?.toObject({ getters: true }) ?? null
    );
  }

  async delete(id: string): Promise<void> {
    await this.timbreModel.findByIdAndDelete(id).exec();
  }
}
