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

  findAll() {
    return `This action returns all mealEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealEntry`;
  }

  update(id: number, updateMealEntryDto: UpdateMealEntryDto) {
    return `This action updates a #${id} mealEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealEntry`;
  }
}
