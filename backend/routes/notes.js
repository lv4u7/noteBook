import { Router } from "express";
import Notes from "../models/Notes.js";

// router is an object that will be used to define the available routes
const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  const note = new Notes(req.body);
  note.save();
  res.json("note is saved");
});

export default router;
