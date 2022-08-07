import { Controller, Request, Post, UseGuards, Get, Body, ValidationPipe } from "@nestjs/common";
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import { CreateDepositDto } from "../deposit/dto/create-deposit.dto";
import { CreateMemberDto } from "../member/dto/create-member.dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('/auth/signup')
  async signup(@Body(new ValidationPipe) body: CreateMemberDto){
    return this.authService.signup(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile-user')
  @UseGuards(new JwtAuthGuard(0))
  getProfileUser(@Request() req) {
    return req.user;
  }

  @Get('profile-admin')
  @UseGuards(new JwtAuthGuard(1))
  getProfileAdmin(@Request() req) {
    return req.user;
  }

}