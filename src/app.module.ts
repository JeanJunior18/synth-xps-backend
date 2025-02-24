import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/file/file.module';
import { TimbreModule } from 'src/timbre/timbre.module';

@Module({
  imports: [
    TimbreModule,
    FileModule,
    MongooseModule.forRoot('mongodb://localhost:27017/synth-xps'),
  ],
})
export class AppModule {}
