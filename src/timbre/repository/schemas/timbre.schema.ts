import { HydratedDocument, Schema } from 'mongoose';
import { Timbre } from 'src/timbre/entities/timbre.entity';

export type TimbreDocument = HydratedDocument<Timbre>;

export const TimbreSchema = new Schema<TimbreDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    contributorId: { type: String, required: true },
    downloadCount: { type: Number, default: 0 },
    downloadUrl: { type: String, required: true },
    extension: String,
    iconUrl: String,
    previewUrl: String,
    size: Number,
    __v: { type: Number, select: false },
  },
  {
    id: true,
    timestamps: true,
  },
);
