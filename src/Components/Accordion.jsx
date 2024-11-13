import React from "react";
import { FAQData } from "../Utility/data";

const Accordion = () => {
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
          <h2 class="accordion-header">
            <button
              class="accordion-button p-0 py-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
                backgroundColor: "#FFFFFF",
                color: "#101828",
              }}
            >
              {item.question}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
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
