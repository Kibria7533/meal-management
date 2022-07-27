import { Injectable } from '@nestjs/common';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {MealEntry} from "./mealEntrySchema";

@Injectable()
export class MealEntryService {
  constructor(@InjectModel('MealEntry.Name') private MealEntryModel:Model<MealEntry>) {
  }
  async create(createMealEntryDto: CreateMealEntryDto) {
    try{
      const mealList = new this.MealEntryModel(createMealEntryDto);
      return await mealList.save();
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
