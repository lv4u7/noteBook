import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Adding note
  const getAllNotes = async () => {
    // here api
    //API
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGFkMzBhMTUzNDQ2ZjkzMDFiMGMyIn0sImlhdCI6MTcwNTU1MzI4M30.4nnTnz2UYBfZNraWupU6wsYXZtQfZHT5GQfJODRBCLA",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const jsn = await response.json(); // parses JSON response into native JavaScript objects
    console.log(jsn);
    setNotes(jsn);
  };

  // Adding note
  const addNote = async (title, description, tag) => {
    // here api
    //API
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGFkMzBhMTUzNDQ2ZjkzMDFiMGMyIn0sImlhdCI6MTcwNTU1MzI4M30.4nnTnz2UYBfZNraWupU6wsYXZtQfZHT5GQfJODRBCLA",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const jsn = response.json(); // parses JSON response into native JavaScript objects
    console.log(jsn);
    console.log("adding new note");
    let note = {
      _id: "65aa633614ac3ea9f742cea03",
      user: "65a8ad30a153446f9301b0c2",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-19T11:55:34.643Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit the note
  const editNote = async (id, title, description, tag) => {
    //API
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGFkMzBhMTUzNDQ2ZjkzMDFiMGMyIn0sImlhdCI6MTcwNTU1MzI4M30.4nnTnz2UYBfZNraWupU6wsYXZtQfZHT5GQfJODRBCLA",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const jsn = response.json(); // parses JSON response into native JavaScript objects

    for (let i = 0; i < notes.length; i++) {
      const n = notes[i];
      if (n - _id === id) {
        n.title = title;
        n.description = description;
        n.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
