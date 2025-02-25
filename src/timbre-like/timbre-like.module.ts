import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TimbreLike } from 'src/timbre-like/entities/timbre-like.entity';
import { TimbreLikeSchema } from 'src/schemas/timbre-like.schema';
import { TimbreLikeRepositoryPort } from 'src/timbre-like/repository/timbre-like.repository.port';
import { TimbreLikeRepositoryAdapter } from 'src/timbre-like/repository/timbre-like.repository.adapter';
import { TimbreLikeController } from 'src/timbre-like/timbre-like.controller';
import { TimbreLikeService } from 'src/timbre-like/timbre-like.service';
import { TimbreModule } from 'src/timbre/timbre.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TimbreLike.name, schema: TimbreLikeSchema },
    ]),
    TimbreModule,
  ],
  controllers: [TimbreLikeController],
  providers: [
    TimbreLikeService,
    {
      provide: TimbreLikeRepositoryPort,
      useClass: TimbreLikeRepositoryAdapter,
    },
  ],
})
export class TimbreLikeModule {}
