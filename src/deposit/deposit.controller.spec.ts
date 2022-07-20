import { Test, TestingModule } from '@nestjs/testing';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

describe('DepositController', () => {
  let controller: DepositController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositController],
      providers: [DepositService],
    }).compile();

    controller = module.get<DepositController>(DepositController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
