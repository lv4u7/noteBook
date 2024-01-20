import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import css from "../styles/Noteitem.module.css";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export const Noteitem = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const handleClick = () => {
    deleteNote(note._id);
  };
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center mb-2 ">
            <h5 className="card-title me-2">{note.title}</h5>
            <RiDeleteBin6Line
              className={`me-2 ${css.mouse}`}
              onClick={handleClick}
            />
            <CiEdit
              className={`me-2 ${css.mouse}`}
              onClick={() => updateNote(note)}
            />
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
