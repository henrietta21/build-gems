import React from "react";
import { HomeCards } from "../../Utility/data";

const PictureCard = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center mb-5">
      {HomeCards.map((item) => (
        <div
          className="card border-0"
          style={{
            width: "18rem",
            borderRadius: "0px",
            fontSize: "20px",
            border: "1px solid red",
          }}
        >
          <img src={item.img} class="card-img-top" alt={item.name} />
          <div className="card-body p-0 mt-4 d-flex flex-column">
            <h2
              className="card-title "
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
              }}
            >
              {item.name}
            </h2>
            <p
              className="card-text"
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "#6941C6",
              }}
            >
              {item.role}
            </p>
            <span
              className="text-body-secondary mt-auto"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#475467",
              }}
            >
              {item.school}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureCard;
