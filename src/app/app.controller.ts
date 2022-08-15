import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from "@nestjs/common";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateMemberDto } from "../member/dto/create-member.dto";
import { ApiTags } from "@nestjs/swagger";
import { USER_ROLE,ADMIN_ROLE} from "./app.constant";

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
  @UseGuards(new JwtAuthGuard(USER_ROLE))
  getProfileUser(@Request() req) {
    return req.user;
  }

  @Get('profile-admin')
  @UseGuards(new JwtAuthGuard(ADMIN_ROLE))
  getProfileAdmin(@Request() req) {
    return req.user;
  }

}