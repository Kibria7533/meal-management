import { Body, forwardRef, Inject, Injectable, Post } from "@nestjs/common";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { Member } from "./memberSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { SearchService } from "../search/search.service";
import { MessService } from "../mess/mess.service";

@Injectable()
export class MemberService {

  constructor(@InjectModel('Member') private memberModel:Model<Member>, @Inject(SearchService)
  private readonly searchService: SearchService) {
  }

  @Post()
  async create(@Body() member: CreateMemberDto) {
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
     let user=await new this.memberModel(member).save();
       await this.searchService.indexMember({name:user.name,email:user.email,phone_no:user.phone_no,address:user.address});
     if(user)
       return {
         success: true,
         status:201,
         msg: 'User created',
       }

    }catch (error){
        return {
          success:false,
          status:404,
          msg: "Phone no is already taken",
        }
      }

  }


  async findOne(user_id: string,mess_id:string) {
    try {
    let member=await this.memberModel.findOne({ _id: user_id});
    if('ll'==mess_id){
      return {
        success: true,
        status:201,
        mess_id:member,
        msg: 'Mess Exist',
      }
    }else{
      return {
        success: false,
        status:400,
        msg: 'No Mess Exist with this id',
      }
    }

    }catch (e){
      return {
        success: false,
        status:400,
        msg: 'No Mess Exist with this id',
      }
    }
  }


  async findOneAndUpdate(id: string,mess_id:any) : Promise<any>{
     return this.memberModel.findOneAndUpdate({ _id: id }, { mess_id: mess_id });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  async remove(id: number) {
    await this.searchService.remove(id);
    return this.memberModel.deleteOne({id})
  }

  async find(name: string) {
    return  this.memberModel.findOne({name: name});
  }

  getMemberStatement(id: string) {
    return this.memberModel.aggregate([{
      $match: {
        $and: [{ status: 1 }, { mess_id: id }]
      }
    },
      { $group: { _id: "$mess_id", totalActiveMember: { $sum: "$_id" } } },
      { $project: { _id: 0 } }
    ]);

  }

   async findOneMember(phone_no:string) {
     return this.memberModel.findOne({ phone_no: phone_no });
  }

  async getAllMemberOfaMess(userIds: Array<string>) {
    return this.memberModel.find({ "_id": { "$in": userIds } })
  }
}
