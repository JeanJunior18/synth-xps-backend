import { Module } from '@nestjs/common';
import { TimbreService } from './timbre.service';
import { TimbreController } from './timbre.controller';

@Module({
  controllers: [TimbreController],
  providers: [TimbreService],
})
export class TimbreModule {}
