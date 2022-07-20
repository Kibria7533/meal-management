import { Test, TestingModule } from '@nestjs/testing';
import { MealEntryController } from './meal_entry.controller';
import { MealEntryService } from './meal_entry.service';

describe('MealEntryController', () => {
  let controller: MealEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealEntryController],
      providers: [MealEntryService],
    }).compile();

    controller = module.get<MealEntryController>(MealEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
