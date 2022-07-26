import { Injectable } from '@nestjs/common';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BazarList} from "../bazar-list/bazarListSchema";
import {MealEntry} from "./mealEntrySchema";

@Injectable()
export class MealEntryService {
  constructor(@InjectModel('MealEntry.Name') private MealEntryModel:Model<MealEntry>) {
  }
  async create(createMealEntryDto: CreateMealEntryDto) {
    try{
      const bazarList = new this.MealEntryModel(createMealEntryDto);
      return await bazarList.save();
    }catch (err){
      return err;
    }

  }

  async findAll(): Promise<MealEntry[]> {
    return this.MealEntryModel.find().exec();
  }

 async findOne(id: number): Promise<MealEntry[]> {
    return this.MealEntryModel.find().exec();
  }

 async update(id: number, updateMealEntryDto: UpdateMealEntryDto) {
    return this.MealEntryModel.updateOne({id},{$set:{...updateMealEntryDto}})
  }

  async remove(id: number) {
    return this.MealEntryModel.deleteOne({id});
  }
}
