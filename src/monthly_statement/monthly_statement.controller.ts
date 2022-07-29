import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MonthlyStatementService } from "./monthly_statement.service";
import { CreateMonthlyStatementDto } from "./dto/create-monthly_statement.dto";
import { UpdateMonthlyStatementDto } from "./dto/update-monthly_statement.dto";
import { DepositService } from "../deposit/deposit.service";
import { BazarListService } from "../bazar-list/bazar-list.service";
import { MealEntryService } from "../meal_entry/meal_entry.service";
import { MemberService } from "../member/member.service";

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

  @Get("/get-statement/:id")
  getMonthlyStatement(@Param("id") id: string){

    let deposit=this.depositService.getDepositStatement(+id);
    let bazarList=this.bazarListService.getBazarStatement(+id);
    let memberList=this.memberService.getMemberStatement(+id);
    let mealList=this.mealEntryService.getMealStatement(+id);


    return deposit;


  }


}


