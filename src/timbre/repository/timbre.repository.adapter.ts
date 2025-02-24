import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Timbre } from 'src/timbre/entities/timbre.entity';
import { TimbreRepositoryPort } from 'src/timbre/repository/timbre.repository.port';

export class TimbreRepositoryAdapter implements TimbreRepositoryPort {
  constructor(
    @InjectModel(Timbre.name) private readonly timbreModel: Model<Timbre>,
  ) {}

  create(timbre: Timbre): Promise<Timbre> {
    const createdTimbre = new this.timbreModel(timbre);
    return createdTimbre.save();
  }

  async findById(id: string): Promise<Timbre | null> {
    if (!id || !isValidObjectId(id)) return null;

    const timbre = await this.timbreModel.findById(id).exec();
    if (!timbre) return null;

    return timbre;
  }

  async findAll(filter: Partial<Timbre> = {}): Promise<Timbre[]> {
    return (await this.timbreModel.find(filter).exec()).map((timbre) =>
      timbre.toObject({ getters: true }),
    );
  }

  async updateById(id: string, timbre: Timbre): Promise<Timbre | null> {
    return this.timbreModel.findByIdAndUpdate(id, timbre, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.timbreModel.findByIdAndDelete(id).exec();
  }
}
