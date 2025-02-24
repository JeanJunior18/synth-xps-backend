import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findByUsername(username);

    if (!compareSync(password, user.password)) {
      throw new UnauthorizedException();
    }

    const jwtPayload = { username: user.username, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
}
