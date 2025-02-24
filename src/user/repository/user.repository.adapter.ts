import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { UserRepositoryPort } from 'src/user/repository/user.repository.port';

export class UserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return (await createdUser.save()).toObject({ getters: true });
  }

  async findAll(): Promise<User[]> {
    return (await this.userModel.find().exec()).map((user) =>
      user.toObject({ getters: true }),
    );
  }

  async findById(id: string): Promise<User | null> {
    if (!id && !isValidObjectId(id)) return null;
    return (
      (await this.userModel.findById(id).exec())?.toObject({
        getters: true,
      }) ?? null
    );
  }

  async findByUsername(username: string): Promise<User | null> {
    return (
      (
        await this.userModel
          .findOne({
            username,
          })
          .exec()
      )?.toObject({ getters: true }) ?? null
    );
  }

  async updateById(id: string, user: User): Promise<User | null> {
    return (
      (
        await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec()
      )?.toObject({ getters: true }) ?? null
    );
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
