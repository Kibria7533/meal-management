import { Module } from '@nestjs/common';
import { MessService } from './mess.service';
import { MessController } from './mess.controller';
import {Mess,MessSchema} from './messSchema';
import {MongooseModule} from "@nestjs/mongoose";
import { MemberModule } from "../member/member.module";
import {MessMemberSchema} from "./messMemberSchema";
@Module({
  imports :[
    MemberModule,
    MongooseModule.forFeature([{ name: 'Mess', schema: MessSchema },{ name: 'MessMember', schema: MessMemberSchema }])],
  controllers: [MessController],
  providers: [MessService],
  exports :[MessService]
})
export class MessModule {}
