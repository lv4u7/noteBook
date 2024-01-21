import { useState } from "react";
import NoteContext from "./NoteContext";
import PropTypes from "prop-types";

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
        "x-auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const jsn = await response.json(); // parses JSON response into native JavaScript objects
    setNotes(jsn);
  };

  // Adding note
  const addNote = async (title, description, tag) => {
    // here api
    //API
    const res = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    let note = await res.json();
    setNotes(notes.concat(note));
  };

  //Delete note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletnote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit the note
  const editNote = async (id, title, description, tag) => {
    //API
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must ma tch "Content-Type" header
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      let n = newNotes[i];
      if (n._id === id) {
        n.title = title;
        n.description = description;
        n.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getAllNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
NoteState.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NoteState;
