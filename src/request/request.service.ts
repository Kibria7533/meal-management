import { HttpStatus, Inject, Injectable, Res, Response } from "@nestjs/common";
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Member} from "../member/memberSchema";
import {BazarListService} from "../bazar-list/bazar-list.service";
import {DepositService} from "../deposit/deposit.service";
import {MealEntryService} from "../meal_entry/meal_entry.service";
import {MemberService} from "../member/member.service";

@Injectable()
export class RequestService {

  constructor(@InjectModel('Member') private memberModel:Model<Member>,
  @Inject(BazarListService)
  private readonly bazarListService: BazarListService,
  @Inject(DepositService)
  private readonly depositService: DepositService,
              @Inject(MealEntryService)
              private readonly mealEntryService: MealEntryService,



  ) {
  }
  async create(createRequestDto: CreateRequestDto) {
    return 'This action adds a new request';
  }

  async findAll():Promise<Member[]>{
    let members=this.memberModel.find().exec();
    return members;
  }

  async findOne(id:number) {
    // return this.bazarListModel.findOne().exec();
    return 'uuhuhbuhbuh';

  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }


  async getAllRequest(id: string,@Res() res){
    let bazarList=await this.bazarListService.getBazarRequest(id);
    let deposit=await this.depositService.getDepositRequest(id);
    let mealList=await this.mealEntryService.getMealEntryRequest(id)
    return res.status(HttpStatus.OK).json({
      status: 'success',
      data: {
        bazarList,
        deposit,
        mealList
      }
    });
  }


  async acceptRequest(body:any){
    if(body.type=="Deposit"){
   return this.depositService.findOneAndUpdate(body.id,body.data);
    }else if(body.type=="BazarList"){
      return  this.bazarListService.findOneAndUpdate(body.id,body.data)
    } else if(body.type=="MealEntry"){
    return this.mealEntryService.findOneAndUpdate(body.id,body.data)
    }else  if(body.type=="Member"){

    }
    return body;

  }

}
