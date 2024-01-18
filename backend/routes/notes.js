import { Router } from "express";
import Note from "../models/Notes.js";
import { fetchuser } from "../middleware/fetchuser.js";
import { body, validationResult } from "express-validator";

// router is an object that will be used to define the available routes
const router = Router();

//Get all notes: GET"/api/notes/getallnotes 'login req'
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("an error occured");
  }
});

//add new note: POST"/api/notes/addnote 'login req'
router.post("/addnote", fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
  ], async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const result = validationResult(req);
      //400 bad request with errors
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const newNote = new Note({
        user: req.user.id, title, description, tag,
      });
      const note = await newNote.save();
      res.json(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("an error occured");
    }
  });

//update existing notes PUT:/api/notes/updatenote 'login req'
router.put("/updatenote/:id", fetchuser, async (req, res) => {
 
    const { title, description, tag } = req.body;
    //create new Note 
    const newNote = {}
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // note ko search kr k update krni hy
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("! found" );
    }
    //checking the owner of the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("! Allowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    //this line is mongoose function(id of the note to update, using set operator update the field using newNote values, {new:true} ensures that it returns the modified document)
    res.json(note);
  
});

export default router;
