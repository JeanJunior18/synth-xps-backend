import { File } from 'node:buffer';

export class CreateTimbreDto {
  name: string;
  description: string;
  category: string;
  file: File | Buffer;
}
