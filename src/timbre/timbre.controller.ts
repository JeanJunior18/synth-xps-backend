import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTimbreDto } from 'src/timbre/dto/create-timbre.dto';
import { TimbreService } from 'src/timbre/timbre.service';

@Controller('timbre')
export class TimbreController {
  constructor(private readonly timbreService: TimbreService) {}

  @Post()
  create(@Body() createTimbreDto: CreateTimbreDto) {
    return this.timbreService.create(createTimbreDto);
  }

  @Get()
  findAll() {
    return this.timbreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timbreService.findOne(id);
  }
}
