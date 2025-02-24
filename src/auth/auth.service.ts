import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    // TODO: Create a hash of the password and compare it with the hash stored in the database
    if (user.password === password) {
      return user;
    }

    // TODO: Generate a JWT token and return it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }
}
