import { Module } from '@nestjs/common';
import { MealEntryService } from './meal_entry.service';
import { MealEntryController } from './meal_entry.controller';

@Module({
  controllers: [MealEntryController],
  providers: [MealEntryService]
})
export class MealEntryModule {}
