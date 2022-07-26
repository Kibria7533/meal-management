import {Injectable} from '@nestjs/common';
import {CreateMemberDto} from './dto/create-member.dto';
import {UpdateMemberDto} from './dto/update-member.dto';
import {Member} from "./memberSchema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {

  constructor(@InjectModel('Member') private memberModel:Model<Member>) {
  }

  async create(createMemberDto: CreateMemberDto) {
    const {password,name}=createMemberDto;
    const existCheck=await this.memberModel.findOne({name:name});
    if(existCheck){
      return {
        msg:"User already exists"
      }
    }
    const saltOrRounds = 10;
    createMemberDto.password=await bcrypt.hash(password, saltOrRounds);
    return new this.memberModel(createMemberDto).save();
  }

  findAll():Promise<Member[]> {
    return this.memberModel.find().exec();
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
    return  this.memberModel.findOne({name: username});
  }
}
