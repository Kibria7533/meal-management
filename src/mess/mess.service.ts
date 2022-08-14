import { Inject, Injectable } from "@nestjs/common";
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import {Mess, MessSchema} from './messSchema';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import { MemberService } from "../member/member.service";
import {Member} from "../member/memberSchema";
import {MessMember,MessMemberSchema} from "./messMemberSchema";

@Injectable()
export class MessService {
  constructor(@InjectModel('Mess') private messListModel:Model<Mess>,
              @InjectModel('MessMember') private messMemberModel:Model<MessMember>,
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

      const messmemberList= new this.messMemberModel({mess_id:messData.mess_id,person_id:user_id,status:1})
      let messmemberData= await messmemberList.save();
      return {
        success:true,
        status:201,
        mess_info:messData,
        msg:"Mess Created"
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
    try {
      let messExist=await this.messListModel.findOne({mess_id:mess_id})
      if(!messExist){
        return {
          success:false,
          status:404,
          msg:"Mess dose not exist"
        }
      }else {
        let messIds = await this.messMemberModel.find({user_id:user_id},{mess_id:1,_id:0})
        console.log(messIds,'messIds',messIds.some(el=>el.mess_id==mess_id));
        if(messIds.some(el=>el.mess_id==mess_id)){
          return {
            success:true,
            mess_id:mess_id,
            status:201,
            msg:"Mess Successful "
          }
        }else {
          return {
            success:false,
            status:404,
            msg:"Mess dose not exist"
          }
        }
      }
    }catch (err){
      return {
        success:false,
        status:404,
        msg:"Mess dose not exist"
      }
    }
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
