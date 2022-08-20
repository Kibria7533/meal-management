import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from "@nestjs/platform-express";
import { MongooseModule } from "@nestjs/mongoose";
import { MessSchema } from "../mess/messSchema";
import { MessMemberSchema } from "../mess/messMemberSchema";
import { UserImageSchema } from "./userImageSchema";
import { MemberModule } from "../member/member.module";

@Module({
  imports:[MemberModule,MulterModule.register({
    dest: './upload',
  }),MongooseModule.forFeature([{ name: 'UserImage', schema: UserImageSchema }])],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
