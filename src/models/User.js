import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    trim: true, // removes whitespace from beginning and end of string
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
