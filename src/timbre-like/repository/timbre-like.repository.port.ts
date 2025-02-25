import { TimbreLike } from 'src/timbre-like/entities/timbre-like.entity';

export abstract class TimbreLikeRepositoryPort {
  abstract create(timbreLike: TimbreLike): Promise<void>;
  abstract findAllByTimbreId(timbreId: string): Promise<TimbreLike[]>;
  abstract findByTimbreIdAndUserId(
    timbreId: string,
    userId: string,
  ): Promise<TimbreLike | null>;
  abstract remove(id: string): Promise<void>;
  abstract countByTimbreId(timbreId: string): Promise<number>;
}
