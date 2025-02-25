import { IsString } from 'class-validator';

export class CreateTimbreLikeDto {
  @IsString()
  timbreId: string;
}
