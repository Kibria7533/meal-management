import { Test, TestingModule } from '@nestjs/testing';
import { MealEntryService } from './meal_entry.service';

describe('MealEntryService', () => {
  let service: MealEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealEntryService],
    }).compile();

    service = module.get<MealEntryService>(MealEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
