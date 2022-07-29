import { Body, Injectable, Post } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import {MemberService} from "../member/member.service";
import * as bcrypt from 'bcrypt';
import { CreateMemberDto } from "../member/dto/create-member.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: MemberService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
   console.log('here',username,pass);
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
      success:true,
      status:201,
      access_token:  this.jwtService.sign(payload),
    };
  }

  @Post()
   async signup(@Body() body :CreateMemberDto) {
   return  this.usersService.create(body);
  }
}