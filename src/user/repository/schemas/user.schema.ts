import { HydratedDocument, Schema } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type UserDocument = HydratedDocument<User>;

export const UserSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    __v: { type: Number, select: false },
  },
  {
    id: true,
    timestamps: true,
  },
);
