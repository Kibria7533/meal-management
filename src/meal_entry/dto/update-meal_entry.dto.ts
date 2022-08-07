import { PartialType } from '@nestjs/mapped-types';
import { CreateMealEntryDto } from './create-meal_entry.dto';

export class UpdateMealEntryDto extends PartialType(CreateMealEntryDto) {

}
