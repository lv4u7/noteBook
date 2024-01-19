import React, { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-5">
  <h2 className="mb-4">Add new note</h2>
  <form className="my-3">
    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        onChange={onChange}
        placeholder="Enter title"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input
        type="text"
        className="form-control"
        id="description"
        name="description"
        onChange={onChange}
        placeholder="Enter description"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">
        Tags
      </label>
      <input
        type="text"
        className="form-control"
        id="tags"
        name="tag"
        onChange={onChange}
        placeholder="Enter tags"
      />
    </div>
    <button
      type="submit"
      className="btn btn-success"
      onClick={handleClick}
    >
      <span>Add note</span>
    </button>
  </form>
</div>

  );
};

export default AddNote;
