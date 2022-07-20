import { Test, TestingModule } from '@nestjs/testing';
import { MessService } from './mess.service';

describe('MessService', () => {
  let service: MessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessService],
    }).compile();

    service = module.get<MessService>(MessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
