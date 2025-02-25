export class File {
  id: string;
  name: string;
  description: string;
  extension: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  contributorId: string;
  downloadCount: number;
  downloadUrl: string;
  previewUrl: string;
  iconUrl?: string;
}
