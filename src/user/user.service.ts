import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserRepositoryPort } from 'src/user/repository/user.repository.port';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepositoryPort) {}

  async findById(id: string): Promise<User> {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
