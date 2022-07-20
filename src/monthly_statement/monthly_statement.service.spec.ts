import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyStatementService } from './monthly_statement.service';

describe('MonthlyStatementService', () => {
  let service: MonthlyStatementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyStatementService],
    }).compile();

    service = module.get<MonthlyStatementService>(MonthlyStatementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
