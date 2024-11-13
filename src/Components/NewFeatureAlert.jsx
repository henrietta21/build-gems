import React from "react";

const NewFeatureAlert = () => {
  return (
    <div
      className="d-inline align-items-center p-2 rounded-pill border fw-medium mx-auto my-3"
      style={{
        backgroundColor: "#F9F5FF",
        borderColor: "#d1b3ff",
        color: "#6941C6",
        fontSize: "14px",
        maxWidth: "600px",
      }}
    >
      <span
        className="px-3 rounded-pill border me-2 "
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        Coming soon!
      </span>
      <span>•</span>
      <a
        href="#"
        className="ms-2 text-decoration-none"
        style={{
          color: "#6941C6",
        }}
      >
        Become your school ambassador <span className="ms-1">→</span>
      </a>
    </div>
  );
};

export default NewFeatureAlert;
