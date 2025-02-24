import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { UserSchema } from 'src/user/repository/schemas/user.schema';
import { UserRepositoryAdapter } from 'src/user/repository/user.repository.adapter';
import { UserRepositoryPort } from 'src/user/repository/user.repository.port';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UserService,
    { provide: UserRepositoryPort, useClass: UserRepositoryAdapter },
  ],
  exports: [UserService],
})
export class UserModule {}
