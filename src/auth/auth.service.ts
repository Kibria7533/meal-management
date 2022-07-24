import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {MemberService} from "../member/member.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: MemberService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {

    const user = await this.usersService.find(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc.userId ,role:user._doc.role};
    console.log(user._doc,payload,'payload data');
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

   async signup(body: any) {
   return  this.usersService.create(body);
  }
}