import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TimbreCategory } from 'src/timbre/entities/enum/timbre-category.enum';
import { TimbreType } from 'src/timbre/entities/enum/timbre-type.enum';

export class CreateTimbreDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(TimbreCategory)
  category: TimbreCategory;

  @IsEnum(TimbreType)
  type: TimbreType;

  @IsString()
  downloadUrl: string;

  @IsString()
  previewUrl: string;

  @IsString()
  @IsOptional()
  iconUrl?: string;
}
