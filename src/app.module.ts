import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { FileModule } from 'src/file/file.module';
import { TimbreModule } from 'src/timbre/timbre.module';
import { UserModule } from 'src/user/user.module';
import { TimbreLikeModule } from './timbre-like/timbre-like.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TimbreModule,
    FileModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database.mongoUri'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    TimbreLikeModule,
  ],
})
export class AppModule {}
