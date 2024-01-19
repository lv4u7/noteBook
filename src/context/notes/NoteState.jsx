import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65a8bfd77e4a3b543666c788",
      user: "65a8ad30a153446f9301b0c2",
      title: "soul",
      description: "meri rouh ki haqiqat merey aansuoon sy pucho",
      tag: "feeling",
      __v: 0,
      date: "2024-01-19T11:55:37.854Z",
    },
    {
      _id: "65aa633614ac3ea9f742cea0",
      user: "65a8ad30a153446f9301b0c2",
      title: "sallu",
      description: "kalluoueuksad",
      tag: "tahaga",
      date: "2024-01-19T11:55:34.643Z",
      __v: 0,
    },
    {
      _id: "65a8bfd77e4a3b543666c7881",
      user: "65a8ad30a153446f9301b0c2",
      title: "soul",
      description: "meri rouh ki haqiqat merey aansuoon sy pucho",
      tag: "feeling",
      __v: 0,
      date: "2024-01-19T11:55:37.854Z",
    },
    {
      _id: "65aa633614ac3ea9f742cea01",
      user: "65a8ad30a153446f9301b0c2",
      title: "sallu",
      description: "kalluoueuksad",
      tag: "tahaga",
      date: "2024-01-19T11:55:34.643Z",
      __v: 0,
    },
    {
      _id: "65a8bfd77e4a3b543666c7882",
      user: "65a8ad30a153446f9301b0c2",
      title: "soul",
      description: "meri rouh ki haqiqat merey aansuoon sy pucho",
      tag: "feeling",
      __v: 0,
      date: "2024-01-19T11:55:37.854Z",
    },
    {
      _id: "65aa633614ac3ea9f742cea02",
      user: "65a8ad30a153446f9301b0c2",
      title: "sallu",
      description: "kalluoueuksad",
      tag: "tahaga",
      date: "2024-01-19T11:55:34.643Z",
      __v: 0,
    },
    {
      _id: "65a8bfd77e4a3b543666c7883",
      user: "65a8ad30a153446f9301b0c2",
      title: "soul",
      description: "meri rouh ki haqiqat merey aansuoon sy pucho",
      tag: "feeling",
      __v: 0,
      date: "2024-01-19T11:55:37.854Z",
    },
    {
      _id: "65aa633614ac3ea9f742cea03",
      user: "65a8ad30a153446f9301b0c2",
      title: "sallu",
      description: "kalluoueuksad",
      tag: "tahaga",
      date: "2024-01-19T11:55:34.643Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Adding note
  const addNote = (title, description, tag) => {
    // here api call will come soon
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
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
