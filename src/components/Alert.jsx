import React from "react";

export const Alert = ({ msg }) => {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{msg}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
