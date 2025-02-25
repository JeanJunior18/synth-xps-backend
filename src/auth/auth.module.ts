import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import constants from 'src/config/constants.config';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: constants().jwtSecret,
      signOptions: { expiresIn: constants().jwtExpiration },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
