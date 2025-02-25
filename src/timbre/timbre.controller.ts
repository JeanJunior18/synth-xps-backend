import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileDataDto } from 'src/auth/dto/profile-data.dto';
import { CreateTimbreDto } from 'src/timbre/dto/create-timbre.dto';
import { TimbreService } from 'src/timbre/timbre.service';

@UseGuards(AuthGuard)
@Controller('timbre')
export class TimbreController {
  constructor(private readonly timbreService: TimbreService) {}

  @Post()
  create(
    @Body() createTimbreDto: CreateTimbreDto,
    @Request() req: { user: ProfileDataDto },
  ) {
    return this.timbreService.create(createTimbreDto, req.user.sub);
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
