import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {DepositService} from "../deposit/deposit.service";
import {BazarListService} from "../bazar-list/bazar-list.service";
import {MealEntryService} from "../meal_entry/meal_entry.service";

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService,
              private readonly depositService: DepositService,
              private readonly bazarListService: BazarListService,
              private readonly mealEntryService: MealEntryService
              ) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {

    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }



}
