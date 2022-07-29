import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Member} from "../member/memberSchema";
import {MealEntry} from "../meal_entry/mealEntrySchema";
import {Deposit} from "../deposit/depositSchema";

@Injectable()
export class RequestService {
  constructor(@InjectModel('Member') private memberModel:Model<Member>
  ) {
  }
  create(createRequestDto: CreateRequestDto) {
    return 'This action adds a new request';
  }

  findAll() {
    let members=this.memberModel.find({});
    return "jkhkjh";
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
