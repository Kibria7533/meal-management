import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import {Member,MemberSchema} from "./memberSchema";
import {MongooseModule} from "@nestjs/mongoose";
import { SearchModule } from "../search/search.module";
import { MessModule } from "../mess/mess.module";


@Module({
  imports :[ MongooseModule.forFeatureAsync([
    {
      name: Member.name,
      useFactory: () => {
        const schema = MemberSchema;
        schema.plugin(require('mongoose-unique-validator'), { message: 'is already taken' });
        return schema;
      },
    },
  ]),SearchModule],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
