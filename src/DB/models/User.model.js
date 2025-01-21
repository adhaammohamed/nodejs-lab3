import { model, Schema } from 'mongoose';
const roleType = {
  user: 'user',
  admin: 'admin',
};
const userSchema = new Schema(
  {
    userName: {
      type: String,
      maxLength:10,
      minLength:2,
      required: [true, 'thsi fild is required'],
    },
    email: {
      type: String,
      required: [true, 'thsi fild is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'thsi fild is required'],
    },
    phone:String,
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
    },
    image:String,
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

const User = model('User', userSchema);

export default User;
