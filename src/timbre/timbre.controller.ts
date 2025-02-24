import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimbreService } from './timbre.service';
import { CreateTimbreDto } from './dto/create-timbre.dto';
import { UpdateTimbreDto } from './dto/update-timbre.dto';

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
    return this.timbreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimbreDto: UpdateTimbreDto) {
    return this.timbreService.update(+id, updateTimbreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timbreService.remove(+id);
  }
}
