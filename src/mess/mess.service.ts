import { Injectable } from '@nestjs/common';
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import {Mess, MessSchema} from './messSchema';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class MessService {
  constructor(@InjectModel('Mess') private messListModel:Model<Mess>) { }
  async create(createMessDto: CreateMessDto) {
    try{
      const messList = new this.messListModel(createMessDto);
      return messList.save();
    }catch (err){
      return  err;
    }
  }

  findAll() {
    return `This action returns all mess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mess`;
  }

  update(id: number, updateMessDto: UpdateMessDto) {
    return `This action updates a #${id} mess`;
  }

  remove(id: number) {
    return `This action removes a #${id} mess`;
  }
}
