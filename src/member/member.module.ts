import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import {Member,MemberSchema} from "./memberSchema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }])],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule {}
