import React from "react";
import { useParams } from "react-router-dom";
import { MentorsProfile } from "./Utility/data";
import PictureCard from "./Components/PictureCard/PictureCard";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Buttons from "./Components/Buttons/Buttons";
import HeaderImage from "./Components/HeaderImage";
import TopImage from "./assets/images/Vector4.png";

// Sample data (in a real app, fetch from API or use state management)
const mentors = [
  {
    id: "1",
    name: "Omoya Timi",
    role: "Executive Engineer @ Apple",
    bio: "I am a software engineer with a background in engineering and business...",
    university: "University of Lagos",
    image: "path_to_profile_image.jpg",
    otherMentors: [
      {
        id: "2",
        name: "Ayoola Odeluga",
        role: "Strategy Consultant @ PwC",
        university: "University of Lagos",
        image: "path_to_member_image.jpg",
      },
      {
        id: "3",
        name: "Samuel Akinrinade",
        role: "Product Designer @ Opay",
        university: "University of Lagos",
        image: "path_to_member_image.jpg",
      },
      // Add more mentors here
    ],
  },
  // Additional mentor objects...
];

function MentorProfile() {
  const { id } = useParams();
  const mentor = MentorsProfile.find((m) => m.id === id);

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="App">
      <Nav />
      <div className="headerTop"></div>
      <div className="main mx-auto section">
        {/* Mentor Header */}
        <div
          className="d-sm-flex flex-sm-row justify-content-between align-items-center text-align my-4"
          style={{}}
        >
          <div className="d-sm-flex flex-sm-row gap-3 align-items-center">
            <img
              src={mentor.img}
              alt={mentor.name}
              className="rounded-circle"
              style={{
                width: "151.35px",
                height: "160px",
                marginTop: "-5rem",
                border: "4px solid white",
                boxShadow: "",
              }}
            />
            <div>
              <h2
                className="mt-3"
                style={{
                  fontWeight: "600",
                  fontSize: "30px",
                  lineHeight: "38px",
                  color: "#101828",
                }}
              >
                {mentor.name}
              </h2>
              <p>{mentor.role}</p>
            </div>
          </div>
          <Buttons
            className="btn-secondary"
            text="Join Network"
            type="submit"
          />
        </div>

        {/* About Section */}
        <div className="">
          <h5
            style={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#101828",
            }}
          >
            About {mentor.name}
          </h5>
          <p
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              color: " #475467",
            }}
          >
            {mentor.bio}
          </p>
        </div>

        {/* Other Mentors Section */}
      </div>
      <div className="mt-5">
        <h5
          className="mb-4 section"
          style={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#101828",
          }}
        >
          Other mentors from {mentor.school}
        </h5>
        <PictureCard rows="4" />
      </div>
      <Footer />
    </div>
  );
}

export default MentorProfile;
