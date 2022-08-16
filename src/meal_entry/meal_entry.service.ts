import { Injectable } from '@nestjs/common';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {MealEntry} from "./mealEntrySchema";
import {CreateBazarListDto} from "../bazar-list/dto/create-bazar-list.dto";

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
    async findOneAndUpdate(_id: string,MealEntryModel:CreateMealEntryDto) : Promise<any>{
        return  this.MealEntryModel.updateOne({_id},{$set:{...MealEntryModel}})
    }

 async update(id: number, updateMealEntryDto: UpdateMealEntryDto) {
    return this.MealEntryModel.updateOne({id},{$set:{...updateMealEntryDto}})
  }

  async remove(id: number) {
    return this.MealEntryModel.deleteOne({id});
  }

  getMealStatement(id: string) {
    let d = new Date(),
      month = d.getMonth(),
      year = d.getFullYear();

    return this.MealEntryModel.find({ mess_id:id,status:1,
      createdAt: { $lt: new Date(), $gt: new Date(year + "," + month) },
    }).count();
  }

    getMealEntryRequest(id:string){
        let d = new Date(),
            month = d.getMonth(),
            year = d.getFullYear();

        return this.MealEntryModel.find({
            $and: [{status: 0}, {mess_id: id}, {
                createdAt: {
                    $lt: new Date(),
                    $gt: new Date(year + "," + month)
                }
            }]
        })
    }


}
