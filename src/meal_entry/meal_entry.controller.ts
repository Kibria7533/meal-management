import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, UseGuards } from "@nestjs/common";
import { MealEntryService } from './meal_entry.service';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';
import { CreateDepositDto } from "../deposit/dto/create-deposit.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiTags } from '@nestjs/swagger';
import {CreateBazarListDto} from "../bazar-list/dto/create-bazar-list.dto";

@ApiTags('Meal Entry')
@Controller('meal-entry')
export class MealEntryController {
  constructor(private readonly mealEntryService: MealEntryService) {}

  @Post()
  @UseGuards(new JwtAuthGuard(0))
  create(@Body(new ValidationPipe) body: CreateMealEntryDto, @Req() req) {
    let mealEntry  =req.body;
    mealEntry.person_id=req.user.user_id;
    return this.mealEntryService.create(mealEntry);
  }

  @Get()
  findAll() {
    return this.mealEntryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealEntryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealEntryDto: UpdateMealEntryDto) {
    return this.mealEntryService.update(+id, updateMealEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealEntryService.remove(+id);
  }
}
