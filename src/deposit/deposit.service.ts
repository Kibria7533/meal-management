import { Injectable } from "@nestjs/common";
import { CreateDepositDto } from "./dto/create-deposit.dto";
import { UpdateDepositDto } from "./dto/update-deposit.dto";
import { Deposit, DepositSchema } from "./depositSchema";
import mongoose, { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";


@Injectable()
export class DepositService {

  constructor(@InjectModel("Deposit") private depositListModel: Model<Deposit>) {
  }

  async create(createDepositDto: CreateDepositDto) {
    return new this.depositListModel(createDepositDto).save();
  }

  async findAll(): Promise<Deposit[]> {
    return this.depositListModel.find().exec();
  }

  async findOne(id: number): Promise<Deposit[]> {
    return this.depositListModel.find().exec();
  }

  async findOneAndUpdate(_id: string,depositListModel:CreateDepositDto) : Promise<any>{
    return  this.depositListModel.updateOne({_id},{$set:{...depositListModel}})
  }
  async update(id: number, updateDepositDto: UpdateDepositDto) {
    return this.depositListModel.updateOne({ id }, { $set: { ...updateDepositDto } });
  }

  remove(id: number) {
    return this.depositListModel.deleteOne({ id });
  }


  getDepositStatement(id: string) {

    let d = new Date(),
      month = d.getMonth(),
      year = d.getFullYear();

    return this.depositListModel.aggregate([{
      $match: {
        $and: [{ status: 1 }, { mess_id: id }, { createdAt: { $lt: new Date(), $gt: new Date(year + "," + month) } }]
      }
    },
      { $group: { _id: "$mess_id", totalAmount: { $sum: "$amount" } } },
      {$project:{_id:0}}
    ]);

  }


  getDepositRequest(id: string) {
    let d = new Date(),
        month = d.getMonth(),
        year = d.getFullYear();

    return this.depositListModel.find({
      $and: [{status: 0}, {mess_id: id}, {
        createdAt: {
          $lt: new Date(),
          $gt: new Date(year + "," + month)
        }
      }]
    })
  }

}
