import { Module } from '@nestjs/common';
import { MealEntryService } from './meal_entry.service';
import { MealEntryController } from './meal_entry.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {BazarListSchema} from "../bazar-list/bazarListSchema";
import {MealEntry,MealEntrySchema} from "./mealEntrySchema";

@Module({
  imports : [MongooseModule.forFeature([{ name: 'MealEntry.Name', schema: MealEntrySchema }])],
  controllers: [MealEntryController],
  providers: [MealEntryService]
})
export class MealEntryModule {}
