import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealEntryService } from './meal_entry.service';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';

@Controller('meal-entry')
export class MealEntryController {
  constructor(private readonly mealEntryService: MealEntryService) {}

  @Post()
  create(@Body() createMealEntryDto: CreateMealEntryDto) {
    return this.mealEntryService.create(createMealEntryDto);
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
