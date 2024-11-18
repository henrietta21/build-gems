import React, { useState } from "react";
import { FAQData } from "../Utility/data";
import OpenIcon from "../assets/images/minus-circle.png";
import CloseIcon from "../assets/images/plus-circle.png";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently active accordion item

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if already open, otherwise open
  };
  return (
    <div
      class="accordion border-0 mt-3"
      id="accordionExample"
      style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#475467",
        border: "0px",
        borderTop: "1px solid #EAECF0",
      }}
    >
      {FAQData.map((item, index) => (
        <div
          class="accordion-item"
          key={index}
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#475467",
            border: "0px",
            borderTop: "1px solid #EAECF0",
          }}
        >
          <button
            className="w-100 p-0 py-4 collapsed d-flex justify-content-between flex-row border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => toggleAccordion(item.id)}
            style={{
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "28px",
              backgroundColor: "#FFFFFF",
              color: "#101828",
            }}
          >
            <h2
              class="accordion-header"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
                backgroundColor: "#FFFFFF",
                color: "#101828",
              }}
            >
              {item.question}
            </h2>

            <img
              style={{ marginLeft: "auto", paddingLeft: "10px" }}
              src={`${
                activeIndex === item.id ? `${OpenIcon}` : `${CloseIcon}`
              }`}
            />
          </button>
          <div
            id="collapseOne"
            class={`accordion-collapse collapse ${
              activeIndex === item.id ? "show" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#475467",
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
