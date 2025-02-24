import { TimbreCategory } from 'src/timbre/entities/enum/timbre-category.enum';

export class CreateTimbreDto {
  name: string;
  description: string;
  category: TimbreCategory;
  downloadUrl: string;
  previewUrl: string;
  iconUrl: string;
}
