import {Controller, Request, Post, UseGuards, Get, Body} from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('/auth/signup')
  async signup(@Body() body:any){
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