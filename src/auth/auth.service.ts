import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {MemberService} from "../member/member.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: MemberService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {

    const user = await this.usersService.find(username);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if(!isMatch){
        return null;
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.name, user_id: user._doc._id ,role:user._doc.role};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

   async signup(body: any) {
     const userExist = await this.usersService.find(body.username);
     if(userExist){
       return {
         msg:'User Already exist'
       }
     }

   return  this.usersService.create(body);
  }
}