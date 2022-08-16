import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from "@nestjs/common";
import { MonthlyStatementService } from "./monthly_statement.service";
import { CreateMonthlyStatementDto } from "./dto/create-monthly_statement.dto";
import { UpdateMonthlyStatementDto } from "./dto/update-monthly_statement.dto";
import { DepositService } from "../deposit/deposit.service";
import { BazarListService } from "../bazar-list/bazar-list.service";
import { MealEntryService } from "../meal_entry/meal_entry.service";
import { MemberService } from "../member/member.service";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Monthly statement')
@Controller("monthly-statement")
export class MonthlyStatementController {
  constructor(private readonly monthlyStatementService: MonthlyStatementService,
              private readonly depositService: DepositService,
              private readonly mealEntryService: MealEntryService,
              private readonly bazarListService: BazarListService,
              private readonly memberService: MemberService
  ) {
  }

  @Post()
  create(@Body() createMonthlyStatementDto: CreateMonthlyStatementDto) {
    return this.monthlyStatementService.create(createMonthlyStatementDto);
  }

  @Get()
  findAll() {
    return this.monthlyStatementService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.monthlyStatementService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMonthlyStatementDto: UpdateMonthlyStatementDto) {
    return this.monthlyStatementService.update(+id, updateMonthlyStatementDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.monthlyStatementService.remove(+id);
  }

  @Get("/get-statement/:mess_id")
  async getMonthlyStatement(@Param("mess_id") mess_id: string,@Res() res){
    console.log(mess_id,"mess_id");
    let deposit=await this.depositService.getDepositStatement(mess_id);
    let bazar=await this.bazarListService.getBazarStatement(mess_id);
    let member=await this.memberService.getMemberStatement(mess_id);
    let meal=await this.mealEntryService.getMealStatement(mess_id);


    return res.status(HttpStatus.OK).json({
      status: 'success',
      data: {
        bazar,
        deposit,
        meal,
        member
      }
    });


  }


}


