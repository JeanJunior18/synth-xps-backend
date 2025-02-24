import { Injectable, OnModuleInit } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserRepositoryPort } from 'src/user/repository/user.repository.port';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly repository: UserRepositoryPort) {}

  async onModuleInit() {
    await this.repository.findAll().then(async (users) => {
      if (users.length === 0) {
        const user = new User();
        user.username = 'admin@xps.com';
        user.password = 'admin';
        await this.repository.create(await this.createUser(user));
      }
    });
  }

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

  createUser(user: User): Promise<User> {
    user.password = bcrypt.hashSync(user.password, 10);
    return this.repository.create(user);
  }
}
