import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import css from "../styles/Noteitem.module.css";

export const Noteitem = ({ note }) => {
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center mb-2 ">
            <h5 className="card-title me-2">{note.title}</h5>
            <RiDeleteBin6Line className={`me-2 ${css.mouse}`} />
            <CiEdit className={`me-2 ${css.mouse}`} />
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
