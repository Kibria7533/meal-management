import { Module } from '@nestjs/common';
import { MessService } from './mess.service';
import { MessController } from './mess.controller';
import {Mess,MessSchema} from './messSchema';
import {MongooseModule} from "@nestjs/mongoose";
@Module({
  imports :[MongooseModule.forFeature([{ name: 'Mess', schema: MessSchema }])],
  controllers: [MessController],
  providers: [MessService]
})
export class MessModule {}
