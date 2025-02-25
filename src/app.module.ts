import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { FileModule } from 'src/file/file.module';
import { TimbreModule } from 'src/timbre/timbre.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TimbreModule,
    FileModule,
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
