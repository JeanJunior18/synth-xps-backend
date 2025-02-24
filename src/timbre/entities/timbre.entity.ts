import { File } from 'src/file/entities/file.entity';
import { CreateTimbreDto } from 'src/timbre/dto/create-timbre.dto';
import { TimbreCategory } from 'src/timbre/entities/enum/timbre-category.enum';

export class Timbre extends File {
  category: TimbreCategory;

  static createFromDto(dto: CreateTimbreDto): Timbre {
    const timbre = new Timbre();
    timbre.category = dto.category;
    timbre.name = dto.name;
    timbre.description = dto.description;
    timbre.downloadUrl = dto.downloadUrl;
    timbre.previewUrl = dto.previewUrl;
    timbre.iconUrl = dto.iconUrl;
    return timbre;
  }
}
