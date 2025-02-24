import { File } from 'src/file/entities/file.entity';
import { TimbreCategory } from 'src/timbre/entities/enum/timbre-category.enum';

export class Timbre extends File {
  category: TimbreCategory;
}
