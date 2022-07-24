import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {Member,MemberSchema} from "./memberSchema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "../users/users.service";

@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private memberModel:Model<Member>) {
  }

  async create(createMemberDto: CreateMemberDto) {
    return new this.memberModel(createMemberDto).save();
  }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  async remove(id: number) {
    return this.memberModel.deleteOne({id})
  }

  async find(username: string) {
    return this.memberModel.findOne({name: username});
  }
}
