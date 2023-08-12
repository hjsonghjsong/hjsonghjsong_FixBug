import React, { useState } from "react";
import { Grid, TextareaAutosize } from "@mui/material";
import EducationSections from "./EducationSections";
import ExperienceField from "./ExperienceField";
import DynamicWidthInput from "../DynamicWidthInput";
import { useAuth } from "../../Contexts/Auth";
import "./EditResume.css";
import fetchResumeSections from "../../hooks/fetchResumeSections";
import CustomTextArea from "../CustomTextArea";
import DynamicTextArea from "../DynamicTextArea";

const ResumeEditText = ({ fileData, resumeId }) => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.user_metadata?.display_name);
  const [contactNumber, setContactNumber] = useState(
    user?.user_metadata?.phone
  );
  const [email, setEmail] = useState(user?.email);
  const sectionData = fetchResumeSections(resumeId);
  const workExperience = sectionData?.filter(
    (item) => item.context === "Work Experience"
  );
  const projects = sectionData?.filter((item) => item.context === "Project");
  console.log(workExperience);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "fullname") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div className="w-full edit-container">
      <div className="flex flex-col w-full justify-start resume-builder gap-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              id="personals-details-container"
              className="w-full flex flex-wrap justify-center items-center gap-1"
            >
              <DynamicWidthInput
                placeholder="Full name"
                name="fullname"
                value={fullName}
                onChange={handleChange}
                className="text-center w-full"
              />

              <div className="w-full flex justify-center items-center">
                <DynamicWidthInput
                  placeholder="Contact"
                  name="contact"
                  value={contactNumber}
                  onChange={handleChange}
                  className="text-right w-full"
                />
                <div className="mx-2">|</div>
                <DynamicWidthInput
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="text-left w-full"
                />
              </div>

              <div className="w-full flex flex-wrap justify-center items-center">
                <DynamicWidthInput
                  placeholder="Email"
                  name="address"
                  className="text-center"
                />
              </div>

              {/* Social Links */}
              <div className="w-full flex justify-center items-center">
                <DynamicWidthInput
                  placeholder="Github"
                  name="github"
                  onChange={handleChange}
                  className="text-right"
                />
                <div className="mx-2">|</div>
                <DynamicWidthInput
                  placeholder="LinkedIn"
                  name="linkedin"
                  onChange={handleChange}
                  className="text-left"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="w-full">
              <EducationSections />
            </div>
          </Grid>
          <Grid item container xs={12} sx={{ gap: "8px" }}>
            <div className="w-full p-1 bg-slate-300 rounded-sm">
              <span className="w-full font-semibold text-lg px-2">
                Experience
              </span>
            </div>
            {workExperience.map((file) => (
              <Grid item xs={12}>
                <div className="w-full">
                  <ExperienceField workExperience={file} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ResumeEditText;
