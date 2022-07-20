import { Injectable } from '@nestjs/common';
import { CreateMealEntryDto } from './dto/create-meal_entry.dto';
import { UpdateMealEntryDto } from './dto/update-meal_entry.dto';

@Injectable()
export class MealEntryService {
  create(createMealEntryDto: CreateMealEntryDto) {
    return 'This action adds a new mealEntry';
  }

  findAll() {
    return `This action returns all mealEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealEntry`;
  }

  update(id: number, updateMealEntryDto: UpdateMealEntryDto) {
    return `This action updates a #${id} mealEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealEntry`;
  }
}
