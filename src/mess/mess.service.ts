import { Injectable } from '@nestjs/common';
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import {Mess, MessSchema} from './messSchema';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class MessService {
  constructor(@InjectModel('Mess') private messListModel:Model<Mess>) { }
  async create(mess: CreateMessDto) {

    let messExist=await this.messListModel.findOne({mess_id:mess.mess_id});
    if(messExist){
      return {
        success:false,
        status:404,
        msg:"Mess Already exist Please enter Unique Mess Id"
      }
    }
    try{
      const messList = new this.messListModel(mess);
      let messData=await messList.save();

       return {
        success:true,
        status:201,
         mess_info:messData,
        msg:"Mess Successfully created"
      }
    }catch (err){
       return {
        success:false,
        status:404,
        msg:"Something error happened"
      }
    }
  }

  findAll():Promise<Mess[]>{
    return this.messListModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} mess`;
  }

  update(id: number, updateMessDto: UpdateMessDto) {
    return `This action updates a #${id} mess`;
  }

  remove(id: number) {
    return this.messListModel.deleteOne({id})
  }
}
