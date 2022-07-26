import { Injectable } from '@nestjs/common';
import { CreateMonthlyStatementDto } from './dto/create-monthly_statement.dto';
import { UpdateMonthlyStatementDto } from './dto/update-monthly_statement.dto';
import {InjectModel} from "@nestjs/mongoose";
import {MonthlyStatement,MonthlyStatementSchema} from "./monthly-statementSchema";
import {Model} from "mongoose";


@Injectable()
export class MonthlyStatementService {
  constructor(@InjectModel('MonthlyStatement') private MonthlyStatementListModel:Model<MonthlyStatement>) {
  }
  async create(createMonthlyStatementDto: CreateMonthlyStatementDto) {
    return new this.MonthlyStatementListModel(createMonthlyStatementDto).save();
  }

  findAll():Promise<MonthlyStatement[]> {
    return this.MonthlyStatementListModel.find().exec();
  }

  findOne(id: number):Promise<MonthlyStatement[]> {
    return this.MonthlyStatementListModel.find().exec();
  }

  update(id: number, updateMonthlyStatementDto: UpdateMonthlyStatementDto) {
    return this.MonthlyStatementListModel.updateOne({id},{$set:{...updateMonthlyStatementDto}})
  }

  remove(id: number) {
    return this.MonthlyStatementListModel.deleteOne({id})
  }
}
