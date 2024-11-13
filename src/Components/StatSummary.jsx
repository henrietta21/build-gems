import React from "react";
import { StatSummaryData } from "../Utility/data";

const StatSummary = () => {
  return (
    <div className="section">
      <div
        className="purpleContainer d-flex flex-sm-row mx-auto justify-content-center"
        style={{
          maxHeight: "240px",
          border: "1px solid red",
          maxWidth: "80%",
        }}
      >
        {StatSummaryData.map((items) => (
          <div
            className="mx-auto"
            style={{
              border: "1px solid red",
            }}
          >
            <h2
              className="display-4 text-primary"
              style={{
                color: "#7F56D9",
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "72px",
              }}
            >
              {items.figures}
            </h2>
            <p
              style={{
                color: "#42307D",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
              }}
            >
              {items.target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatSummary;
