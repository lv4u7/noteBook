import React from "react";

import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div className="container my-3">
        <h2>Add new note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              tags
            </label>
            <input type="text" className="form-control" id="tags" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        <Notes />
      </div>
    </>
  );
};

export default Home;
