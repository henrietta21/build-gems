import React from "react";
import Buttons from "./Buttons/Buttons";
import Image from "../assets/images/Image.png";

const ProductDescription = () => {
  return (
    <div>
      <div className="d-flex row g-4 my-5 mx-auto">
        <div className="col-md-6 d-flex flex-column">
          <div
            className="card-body mb-auto"
            style={{
              border: "1px solid red",
            }}
          >
            <p className="card-text">
              <small
                className="text-body-secondary"
                style={{
                  color: "#6941C6",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                We’re on a mission
              </small>
            </p>
            <h5
              className="card-title mb-4"
              style={{
                color: "#101828",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              Our product philosophy
            </h5>
            <p
              className="card-text"
              style={{
                color: "#475467",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28px",
              }}
            >
              We connect driven undergraduates and successful alumni working in
              top organizations. This provides undergraduates with guidance,
              insight, and support from alumni who have walked similar paths and
              achieved remarkable success. By joining a cohort of peers with
              similar career interests, students gain access to group mentorship
              that fosters collaboration, shared learning, and growth.
            </p>
            <p
              className="card-text"
              style={{
                color: "#475467",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28px",
              }}
            >
              Mentors, many of whom are industry leaders and experts, offer
              invaluable real-world insights, from navigating career challenges
              to building essential skills. It's a meaningful way to give back,
              inspire future leaders, and stay connected to their alma mater.
              Together, let’s build the next generation!
            </p>
          </div>
          <div
            className="d-flex g-4"
            style={{
              border: "1px solid red",
            }}
          >
            <Buttons text="Get mentor" className="btn-primary" type="submit" />
            <Buttons
              text="Become a mentor"
              className="btn-secondary"
              type="submit"
            />
          </div>
        </div>
        <div className="col-md-6">
          <img src={Image} className="img-fluid rounded-start" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
