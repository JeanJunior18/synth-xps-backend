import { Test, TestingModule } from '@nestjs/testing';
import { TimbreLikeController } from './timbre-like.controller';
import { TimbreLikeService } from './timbre-like.service';

describe('TimbreLikeController', () => {
  let controller: TimbreLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimbreLikeController],
      providers: [TimbreLikeService],
    }).compile();

    controller = module.get<TimbreLikeController>(TimbreLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
