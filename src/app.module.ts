import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimbreModule } from './timbre/timbre.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [TimbreModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
