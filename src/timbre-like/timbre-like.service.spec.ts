import { Test, TestingModule } from '@nestjs/testing';
import { TimbreLikeService } from './timbre-like.service';

describe('TimbreLikeService', () => {
  let service: TimbreLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimbreLikeService],
    }).compile();

    service = module.get<TimbreLikeService>(TimbreLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
