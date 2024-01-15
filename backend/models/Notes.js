import mongoose from "mongoose";
import { Schema } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  //this is also valid name: String,
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    dafault: Date.now, // we dont call the function here, just pass it , it will called when a document will be inserted in the database
  },
});

//here we are creating a model from the Schema named "user" and passing the schema to it and then exporting it
const Note = mongoose.model("notes", NoteSchema);

export default Note;
// we will use it in our routes to create a new user
