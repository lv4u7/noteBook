import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
