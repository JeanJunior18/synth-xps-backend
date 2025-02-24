import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TimbreSchema } from 'src/timbre/repository/schemas/timbre.schema';
import { Timbre } from 'src/timbre/entities/timbre.entity';
import { TimbreRepositoryPort } from 'src/timbre/repository/timbre.repository.port';
import { TimbreRepositoryAdapter } from 'src/timbre/repository/timbre.repository.adapter';
import { TimbreController } from 'src/timbre/timbre.controller';
import { TimbreService } from 'src/timbre/timbre.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Timbre.name, schema: TimbreSchema }]),
  ],
  controllers: [TimbreController],
  providers: [
    TimbreService,
    { provide: TimbreRepositoryPort, useClass: TimbreRepositoryAdapter },
  ],
})
export class TimbreModule {}
