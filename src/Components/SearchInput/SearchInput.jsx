import React, { useState } from "react";
import Search from "../../assets/images/Icon.png";
import { careers } from "../../Utility/data";

const SearchInput = ({ placeholder, input }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const filteredCareers = careers.filter((career) =>
    career.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredCareers);

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: " 1px solid #D0D5DD",
              fontWeight: "400",
              fontSize: "16px",
              color: "#667085",
            }}
          />
          <div class="dropdown me-1">
            <ul class="dropdown-menu">
              {careers.map((career) => (
                <li
                  key={career.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                  }}
                  onClick={() => alert(`You selected: ${career.name}`)}
                >
                  <a class="dropdown-item" href="#">
                    <span style={{ marginRight: "10px" }}>{career.icon}</span>
                    {career.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
