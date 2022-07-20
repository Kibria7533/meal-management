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

  findAll() {
    return `This action returns all monthlyStatement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monthlyStatement`;
  }

  update(id: number, updateMonthlyStatementDto: UpdateMonthlyStatementDto) {
    return `This action updates a #${id} monthlyStatement`;
  }

  remove(id: number) {
    return this.MonthlyStatementListModel.deleteOne({id})
  }
}
