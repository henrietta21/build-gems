import React from "react";
import Accordion from "../Accordion";

const FAQ = () => {
  return (
    <div
      className="my-md-5 mx-auto"
      style={{
        maxWidth: "80%",
      }}
    >
      <h2 className="text-center mb-4">Frequently asked questions</h2>
      <p className="text-center text-muted mb-5">
        Everything you need to know about BuildGems
      </p>
      <Accordion />
    </div>
  );
};

export default FAQ;
