import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UserService } from 'user/user.service';
import { UserDTO } from 'user/user.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createToken() {
    const user: UserDTO = { username: 'shamnad', password: '12435' };
    return jwt.sign(user, 'secretKey', { expiresIn: '24h' });
  }
  async validateUser(token: JwtPayload){
    //return await this.userService.findOneByToken(token);
  }
}