import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import NewFeatureAlert from "../NewFeatureAlert";

const HomeTopContainer = () => {
  return (
    <div class="text-center mx-auto pt-5 border-top">
      <div class="card-body d-flex flex-column justify-content-center">
        <NewFeatureAlert />
        <h1
          class="card-title mb-4"
          style={{ fontWeight: "500", fontSize: "60px" }}
        >
          Get seasoned career mentorship
          <br /> from your alumni
        </h1>
        <p
          class="card-text  mb-5"
          style={{ fontWeight: "400", fontSize: "20px" }}
        >
          —Join a mentorship program connecting you with
          <br /> successful alumni in top organizations.
        </p>
        <SearchInput
          placeholder="What career do you want to build"
          input="search"
        />
      </div>
    </div>
  );
};

export default HomeTopContainer;
