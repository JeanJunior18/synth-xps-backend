import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimbreModule } from './timbre/timbre.module';
import { FileModule } from './file/file.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TimbreModule,
    FileModule,
    MongooseModule.forRoot('mongodb://localhost:27017/synth-xps'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
