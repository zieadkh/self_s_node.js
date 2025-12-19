import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

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
    maxLenght: 500
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

user.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  
  next();
});

const USER = mongoose.model("USER", user);
export default USER;
