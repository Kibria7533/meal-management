import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import {Member,MemberSchema} from "./memberSchema";
import {MongooseModule} from "@nestjs/mongoose";
import { SearchModule } from "../search/search.module";


@Module({
  imports :[MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),SearchModule],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
