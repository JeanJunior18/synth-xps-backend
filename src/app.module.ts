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
    MongooseModule.forRoot('mongodb://localhost:27017/synth-xps'),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
