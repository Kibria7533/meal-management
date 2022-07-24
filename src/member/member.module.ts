import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import {Member,MemberSchema} from "./memberSchema";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "../users/users.service";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }])],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
