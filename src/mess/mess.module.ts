import { Module } from '@nestjs/common';
import { MessService } from './mess.service';
import { MessController } from './mess.controller';
import {Mess,MessSchema} from './messSchema';
import {MongooseModule} from "@nestjs/mongoose";
import { MemberModule } from "../member/member.module";
@Module({
  imports :[
    MemberModule,
    MongooseModule.forFeature([{ name: 'Mess', schema: MessSchema }])],
  controllers: [MessController],
  providers: [MessService]
})
export class MessModule {}
