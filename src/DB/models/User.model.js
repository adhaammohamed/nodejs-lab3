import mongoose, { model, Schema } from 'mongoose';

const roleType = {
  user: 'user',
  admin: 'admin',
};

const userSchema = new Schema(
  {
    userName: {
      type: String,
      maxLength: 10,
      minLength: 2,
      required: [true, 'this field is required'],
    },
    email: {
      type: String,
      required: [true, 'this field is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'this field is required'],
    },
    phone: String,
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
    },
    image: String,
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: Object.values(roleType),
      default: roleType.user,
    },
  },
  { timestamps: true }
);

// Check if model already exists before defining it
const User = mongoose.models.User || model('User', userSchema);

export default User;
