import React from "react";

const Buttons = ({ text, className, type }) => {
  return (
    <div className="d-inline-flex gap-1 ">
      {className ? (
        <button type={type} className={className} data-bs-toggle="button">
          {text}
        </button>
      ) : null}
    </div>
  );
};

export default Buttons;
