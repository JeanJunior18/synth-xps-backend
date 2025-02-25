import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileDataDto } from 'src/auth/dto/profile-data.dto';
import { CreateTimbreLikeDto } from 'src/timbre-like/dto/create-timbre-like.dto';
import { TimbreLikeService } from 'src/timbre-like/timbre-like.service';

@UseGuards(AuthGuard)
@Controller('like')
export class TimbreLikeController {
  constructor(private readonly timbreLikeService: TimbreLikeService) {}

  @Post()
  @HttpCode(204)
  create(
    @Body() createTimbreDto: CreateTimbreLikeDto,
    @Request() req: { user: ProfileDataDto },
  ) {
    return this.timbreLikeService.addLike(createTimbreDto, req.user.sub);
  }
}
