import React from "react";
import Buttons from "../Buttons/Buttons";
import SearchInput from "../SearchInput/SearchInput";
import avatar from "../../assets/images/Avatar group.png";

const TextCard = ({ title, text, btnText, placeholder }) => {
  return (
    <div className="section my-5 py-3">
      <div
        class="text-center greyContainer mx-auto"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        {placeholder != undefined ? (
          <div class="card-body">
            <h2
              class="card-title mb-4"
              style={{
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "44px",
                color: "#101828",
              }}
            >
              {title}
            </h2>
            <p
              class="card-text mb-4"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#475467",
              }}
            >
              {text}
            </p>
            <div className="d-flex flex-sm-row g-col-2 mt-3 justify-content-center align-items-center">
              <SearchInput placeholder={placeholder} />
              <Buttons text={btnText} className="btn-secondary" type="submit" />
            </div>
          </div>
        ) : (
          <div class="card-body">
            <img src={avatar} alt="avatar" className="mb-4" />
            <h2
              class="card-title mb-4"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
                color: "#101828",
              }}
            >
              {title}
            </h2>
            <p
              class="card-text mb-4"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "#475467",
              }}
            >
              {text}
            </p>
            <div className="d-flex flex-row g-4 justify-content-center">
              <Buttons text={btnText} className="btn-secondary" type="submit" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextCard;
