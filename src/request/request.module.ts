import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MealEntrySchema} from "../meal_entry/mealEntrySchema";
import {DepositSchema} from "../deposit/depositSchema";
import {MemberSchema} from "../member/memberSchema";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'MealEntry.Name', schema: MealEntrySchema },{ name: 'Deposit', schema: DepositSchema },{ name: 'Member', schema: MemberSchema }])],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
