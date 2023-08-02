import React from "react";
import image from "../../Utils/Images/job-interview.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";

function HomePage() {
  return (
    <div className="flex flex-col w-full justify-start mb-8">
      <div className="image_container flex flex-col w-full items-center justify-center">
        <img className="home-image" src={image} alt="logo"></img>
        <div className="overlay flex justify-center items-center">
          <div className="home-data flex flex-col items-center justify-center pt-5 pb-6 px-2 text-white">
            <h1 className="font-semibold">Create. Tailor. Succeed</h1>
            <div className="details_container flex items-center justify-between">
              <h2>
                Experience the future of resume building with our
                state-of-the-art AI powered platform. Our resume builder, fueled
                by the cutting-edge OpenAI API, is designed to help you create
                compelling resumes that capture attention and accelerate your
                career growth.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-5">
        <h1>Try Resume Builder</h1>
        <Link to="/resume/add">
          <SecondaryButton
            text="Create New Resume"
            sx={{
              height: "46px",
              width: "100%",
              textTransform: "none",
              fontSize: "16px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;