import React from "react";
import "./Buttons.scss";

const Buttons = ({ text, className, type }) => {
  return (
    <div className="d-inline-flex gap-1 ">
      {className == "btn-secondary" ? (
        <button
          type={type}
          className={className}
          data-bs-toggle="button"
          style={{
            backgroundColor: "#7f56d9",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          {text}
        </button>
      ) : (
        <button
          type={type}
          className={className}
          data-bs-toggle="button"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#344054",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            padding: "10px 18px",
            border: "1px solid #D0D5DD",
            borderRadius: "8px",
            marginRight: "16px",
          }}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Buttons;
