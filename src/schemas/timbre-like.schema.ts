import { HydratedDocument, Schema } from 'mongoose';
import { TimbreLike } from 'src/timbre-like/entities/timbre-like.entity';

export type TimbreLikeDocument = HydratedDocument<TimbreLike>;

export const TimbreLikeSchema = new Schema<TimbreLikeDocument>(
  {
    userId: { type: String, required: true },
    timbreId: { type: String, required: true },
    createdAt: Date,
    __v: { type: Number, select: false },
  },
  {
    id: true,
  },
);
