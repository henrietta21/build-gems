import React from "react";
import Search from "../../assets/images/Icon.png";

const SearchInput = ({ placeholder, input }) => {
  return (
    <div>
      {input == "search" ? (
        <div
          className="input-group mb-5 mt-3 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <span className="input-group-text bg-white border-end-0">
            <img src={Search} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder={placeholder}
            aria-label="Search"
            style={{
              border: " 1px solid #D0D5DD",
              fontWeight: "400",
              fontSize: "16px",
            }}
          />
        </div>
      ) : (
        <div className="input-group">
          <input
            type="text"
            className="form-control border me-2"
            placeholder={placeholder}
            aria-label="text"
            style={{
              border: " 1px solid #D0D5DD",
              fontWeight: "400",
              fontSize: "16px",
              padding: "10px 18px",
              color: "#FFFFFF",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
