import React from "react";
import { HomeCards, MentorsProfile } from "../../Utility/data";
import { Link } from "react-router-dom";
import MentorProfile from "../../MentorProfile";

const PictureCard = ({ rows }) => {
  return (
    <div>
      {rows == "4" ? (
        <div
          className="row row-cols-1 row-cols-md-4 justify-content-center  row-gap-3 mb-5 mx-0 section"
          style={{}}
        >
          {HomeCards.map((item) => (
            <div
              className="card border-0"
              style={{
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
      ) : (
        <div
          className="row row-cols-1 row-cols-md-3 justify-content-center mb-5 mx-0"
          style={{}}
        >
          {MentorsProfile.map((item) => (
            <Link
              to={`/mentors/${item.id}`}
              className="card border-0 mb-4"
              style={{
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PictureCard;
