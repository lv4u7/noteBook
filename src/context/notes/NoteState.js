import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "test",
    class: "1",
  };
  <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>;
};
