import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {Member,MemberSchema} from "./memberSchema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private memberList:Model<Member>) {
  }

  async create(createMemberDto: CreateMemberDto) {
    return new this.memberList(createMemberDto).save();
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
    return this.memberList.deleteOne({id})
  }
}
