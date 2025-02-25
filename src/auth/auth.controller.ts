import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { ProfileDataDto } from 'src/auth/dto/profile-data.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.signIn(
      loginDto.username,
      loginDto.password,
    );
    return user;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: ProfileDataDto }) {
    return req.user;
  }
}
