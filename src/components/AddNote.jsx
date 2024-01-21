/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export const AddNote = ({ showAlert }) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const tref = useRef(null);
  const dref = useRef(null);
  const ref = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    ref.current.value = "";
    tref.current.value = "";
    dref.current.value = "";
    showAlert("Added successfully", "success");
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
            minLength={3}
            ref={tref}
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
            minLength={5}
            ref={dref}
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
            ref={ref}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleClick}
          disabled={
            note.title.trim().length < 3 || note.description.trim().length < 5
          }
        >
          <span>Add note</span>
        </button>
      </form>
    </div>
  );
};

export default AddNote;
