import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //this is also valid name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    dafault: Date.now, // we dont call the function here, just pass it , it will called when a document will be inserted in the database
  },
});

//here we are creating a model from the Schema named "user" and passing the schema to it and then exporting it
const User = mongoose.model("user", UserSchema);
User.createIndexes();
export default User;
// we will use it in our routes to create a new user
