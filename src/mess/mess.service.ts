import { Inject, Injectable } from "@nestjs/common";
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import {Mess, MessSchema} from './messSchema';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import { MemberService } from "../member/member.service";

@Injectable()
export class MessService {
  constructor(@InjectModel('Mess') private messListModel:Model<Mess>,
              @Inject(MemberService)
  private readonly memberService: MemberService) { }


  async create(mess: CreateMessDto,user_id:string) {
    console.log("here");
    let messExist=await this.messListModel.findOne({mess_id:mess.mess_id});
    if(messExist){
      return {
        success:false,
        status:404,
        msg:"Mess Already exist Please enter Unique Mess Id"
      }
    }
    try{
      const messList = new this.messListModel(mess);
      console.log("there");
      let messData=await messList.save();
      let user=this.memberService.findOneAndUpdate(user_id,messData.mess_id);
      return {
        success:true,
        status:404,
        mess_info:messData,
        msg:"Something error happened"
      }

    }catch (err){
       return {
        success:false,
        status:404,
        msg:"Something error happened"
      }
    }
  }

  async joinMess(mess_id:string,user_id:string):Promise<any>{
    return this.memberService.findOne( user_id, mess_id);
  }

  findAll():Promise<Mess[]>{
    return this.messListModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} mess`;
  }

  update(id: number, updateMessDto: UpdateMessDto) {
    return `This action updates a #${id} mess`;
  }

  remove(id: number) {
    return this.messListModel.deleteOne({id})
  }
}
