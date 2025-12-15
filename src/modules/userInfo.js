import mongoose, {Schema} from "mongoose";

const user = new Schema (
  {
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minLength: 1,
    maxLenght:30
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLenght: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  }
  },
  {
  timestamps: true
  }
  );

const USER = mongoose.model("USER", user);
export default USER;
