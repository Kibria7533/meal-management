import { Injectable } from '@nestjs/common';
import { CreateBazarListDto } from './dto/create-bazar-list.dto';
import { UpdateBazarListDto } from './dto/update-bazar-list.dto';
import {BazarListSchema, BazarList} from './bazarListSchema';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class BazarListService {

    constructor(@InjectModel('BazarList.Name') private bazarListModel:Model<BazarList>) { }

 async create(createBazarListDto: CreateBazarListDto) {
   try{
       const bazarList = new this.bazarListModel(createBazarListDto);
       return bazarList.save();
   }catch (err){
     return err;
   }


  }

  findAll() {
    return `This action returns all bazarList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bazarList`;
  }

  update(id: number, updateBazarListDto: UpdateBazarListDto) {
    return `This action updates a #${id} bazarList`;
  }

  remove(id: number) {
    return `This action removes a #${id} bazarList`;
  }
}
