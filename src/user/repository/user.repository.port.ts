import { User } from 'src/user/entities/user.entity';

export abstract class UserRepositoryPort {
  abstract create(user: User): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract updateById(id: string, user: User): Promise<User | null>;
  abstract remove(id: string): Promise<void>;
}
