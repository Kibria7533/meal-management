import { Test, TestingModule } from '@nestjs/testing';
import { BazarListController } from './bazar-list.controller';
import { BazarListService } from './bazar-list.service';

describe('BazarListController', () => {
  let controller: BazarListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BazarListController],
      providers: [BazarListService],
    }).compile();

    controller = module.get<BazarListController>(BazarListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
