import {Inject, Injectable} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Member} from "../member/memberSchema";
import {BazarListService} from "../bazar-list/bazar-list.service";
import {DepositService} from "../deposit/deposit.service";
import {MealEntryService} from "../meal_entry/meal_entry.service";

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


  async getAllRequest(id: string){
    let bazarList=this.bazarListService.getBazarRequest(id);
    let deposit=this.depositService.getDepositRequest(id);
    let mealList=this.mealEntryService.getMealEntryRequest(id)
    return bazarList;
  }

}
