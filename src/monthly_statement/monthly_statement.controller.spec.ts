import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyStatementController } from './monthly_statement.controller';
import { MonthlyStatementService } from './monthly_statement.service';

describe('MonthlyStatementController', () => {
  let controller: MonthlyStatementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyStatementController],
      providers: [MonthlyStatementService],
    }).compile();

    controller = module.get<MonthlyStatementController>(MonthlyStatementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
