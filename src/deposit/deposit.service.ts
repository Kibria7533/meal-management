import { Injectable } from "@nestjs/common";
import { CreateDepositDto } from "./dto/create-deposit.dto";
import { UpdateDepositDto } from "./dto/update-deposit.dto";
import { Deposit, DepositSchema } from "./depositSchema";
import { Model } from "mongoose";
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

  async update(id: number, updateDepositDto: UpdateDepositDto) {
    return this.depositListModel.updateOne({ id }, { $set: { ...updateDepositDto } });
  }

  remove(id: number) {
    return this.depositListModel.deleteOne({ id });
  }


  getDepositStatement(id: number) {

    let d = new Date(),
      month = d.getMonth(),
      year = d.getFullYear();

    return this.depositListModel.find({ mess_id:id,status:1,
      createdAt: { $lt: new Date(), $gt: new Date(year + "," + month) }
    });

  }


}
