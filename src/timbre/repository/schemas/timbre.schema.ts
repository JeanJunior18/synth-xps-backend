import { Schema } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Timbre } from 'src/timbre/entities/timbre.entity';

export type TimbreDocument = HydratedDocument<Timbre>;

export const TimbreSchema = new Schema<Timbre>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    contributorId: { type: Schema.Types.ObjectId, required: true },
    createdAt: Date,
    updatedAt: Date,
    downloadCounter: { type: Number, default: 0 },
    downloadUrl: { type: String, required: true },
    extension: { type: String, required: true },
    iconUrl: String,
    previewUrl: String,
    size: { type: Number, required: true },
  },
  {
    id: true,
    timestamps: true,
  },
);
