import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MealEntrySchema} from "../meal_entry/mealEntrySchema";
import {DepositSchema} from "../deposit/depositSchema";
import {MemberSchema} from "../member/memberSchema";
import {DepositModule} from "../deposit/deposit.module";
import {BazarListModule} from "../bazar-list/bazar-list.module";
import {MealEntryModule} from "../meal_entry/meal_entry.module";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'MealEntry.Name', schema: MealEntrySchema },{ name: 'Deposit', schema: DepositSchema },{ name: 'Member', schema: MemberSchema }]),
    DepositModule,
    BazarListModule,
    MealEntryModule
  ],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
