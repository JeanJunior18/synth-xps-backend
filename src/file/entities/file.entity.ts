import { Schema } from 'mongoose';

export class File {
  id: string;
  name: string;
  description: string;
  extension: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  contributorId: Schema.Types.ObjectId;
  downloadCounter: number;
  downloadUrl: string;
  previewUrl: string;
  iconUrl?: string;
}
