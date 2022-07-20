import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import {Deposit,DepositSchema} from "./depositSchema";
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";


@Injectable()
export class DepositService {

  constructor(@InjectModel('Deposit') private depositListModel:Model<Deposit>) { }

  create(createDepositDto: CreateDepositDto) {
    return new this.depositListModel(createDepositDto).save();
  }

  findAll() {
    return `This action returns all deposit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deposit`;
  }

  update(id: number, updateDepositDto: UpdateDepositDto) {
    return `This action updates a #${id} deposit`;
  }

  remove(id: number) {
    return `This action removes a #${id} deposit`;
  }
}
