import { PartialType } from '@nestjs/mapped-types';
import { CreateTimbreDto } from './create-timbre.dto';

export class UpdateTimbreDto extends PartialType(CreateTimbreDto) {}
