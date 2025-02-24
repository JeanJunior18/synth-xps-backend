import { Timbre } from 'src/timbre/entities/timbre.entity';

export abstract class TimbreRepositoryPort {
  abstract create(timbre: Timbre): Promise<Timbre>;
  abstract findById(id: string): Promise<Timbre | null>;
  abstract findAll(filter?: Partial<Timbre>): Promise<Timbre[]>;
  abstract updateById(id: string, timbre: Timbre): Promise<Timbre | null>;
  abstract delete(id: string): Promise<void>;
}
