import { Test, TestingModule } from '@nestjs/testing';
import { BazarListService } from './bazar-list.service';

describe('BazarListService', () => {
  let service: BazarListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BazarListService],
    }).compile();

    service = module.get<BazarListService>(BazarListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
