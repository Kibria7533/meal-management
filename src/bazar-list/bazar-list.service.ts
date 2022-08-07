import { Injectable } from '@nestjs/common';
import { CreateBazarListDto } from './dto/create-bazar-list.dto';
import { UpdateBazarListDto } from './dto/update-bazar-list.dto';
import {BazarListSchema, BazarList} from './bazarListSchema';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateDepositDto} from "../deposit/dto/create-deposit.dto";

@Injectable()
export class BazarListService {

    constructor(@InjectModel('BazarList') private bazarListModel:Model<BazarList>) { }

 async create(createBazarListDto: CreateBazarListDto) {
   try{
       const bazarList = new this.bazarListModel(createBazarListDto);
       return bazarList.save();
   }catch (err){
     return err;
   }
  }
   findAll() {
    return this.bazarListModel.find();
  }
    async findOneAndUpdate(_id: string,bazarListModel:CreateBazarListDto) : Promise<any>{
        return  this.bazarListModel.updateOne({_id},{$set:{...bazarListModel}})
    }

  findOne(id: number) {
    return `This action returns a #${id} bazarList`;
  }

  update(id: number, updateBazarListDto: UpdateBazarListDto) {
    return this.bazarListModel.updateOne({id},{$set:{...updateBazarListDto}})
  }

  remove(id: number) {
      return this.bazarListModel.deleteOne({id})
  }

  getBazarStatement(id: string) {
    let d = new Date(),
      month = d.getMonth(),
      year = d.getFullYear();

    return this.bazarListModel.aggregate([{
      $match: {
        $and: [{ status: 1 }, { mess_id: id }, { createdAt: { $lt: new Date(), $gt: new Date(year + "," + month) } }]
      }
    },
      { $group: { _id: "$mess_id", totalCost: { $sum: "$cost" } } },
      {$project:{_id:0}}
    ]);
  }


    async getBazarRequest(id: string) {
        let d = new Date(),
            month = d.getMonth(),
            year = d.getFullYear();

        return  this.bazarListModel.find({
            $and: [{status: 0}, {mess_id: id}, {
                createdAt: {
                    $lt: new Date(),
                    $gt: new Date(year + "," + month)
                }
            }]
        })
    }

}
