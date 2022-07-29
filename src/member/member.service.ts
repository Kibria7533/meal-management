import { Body, Injectable, Post } from "@nestjs/common";
import { CreateMemberDto } from './dto/create-member.dto';
import {UpdateMemberDto} from './dto/update-member.dto';
import {Member} from "./memberSchema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {

  constructor(@InjectModel('Member') private memberModel:Model<Member>) {
  }

  @Post()
  async create(@Body() member: CreateMemberDto) {
    console.log(member);
    const { password, name } = member;
    const existCheck=await this.memberModel.findOne({name:name});
    if(existCheck){
      return {
        success:false,
        status:404,
        msg: 'User already exists',
      }
    }

    try{
      const saltOrRounds = 10;
      member.password=await bcrypt.hash(password, saltOrRounds);
     let user=new this.memberModel(member).save();
     if(user)
       return {
         success: true,
         status:201,
         msg: 'User created',
       }

    }catch (err){
      return {
        success:false,
        status:404,
        msg: 'User already exists',
      }
    }

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

  async find(name: string) {
    return  this.memberModel.findOne({name: name});
  }

  getMemberStatement(id: number) {
    return 34;
  }
}
