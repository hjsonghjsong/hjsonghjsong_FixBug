import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FeedBack from "./FeedBack";

const scoreStyles = (score) => {
  if (score >= 80) {
    return "#24C63D";
  } else if (score < 80 && score >= 50) {
    return "#FFAE43";
  } else if (score < 50) {
    return "#F04438";
  }
};

const ScoreCard = ({ feedback }) => {
  const scoreList = [
    { id: "format", name: "Format" },
    { id: "soft_skills", name: "Soft Skills" },
    { id: "bullet_points", name: "Bullet Points" },
    { id: "skills", name: "Skills" },
  ];

  // Check if feedback is null, and set a default value if it is
  const initialActiveSection = feedback ? feedback.format : {};
  const [openSection, setOpenSection] = useState(null);
  const [activeSection, setActiveSection] =
    React.useState(initialActiveSection);
  console.log(feedback);

  const handleActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col gap-7 items-start w-full ">
      <Typography variant="h3" sx={{ fontSize: "18px", lineHeight: "normal" }}>
        Overview
      </Typography>
      <List
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        {scoreList.map((item, index) => (
          <div className="flex w-full" key={index}>
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemButton
                onClick={() => handleActiveSection(feedback[item?.id])}
                sx={{
                  backgroundColor:
                    activeSection === feedback[item?.id] ? "#ebedf0" : "",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "44px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    fontFamily: "inter",
                    color: scoreStyles(feedback[item?.id]?.score),
                  }}
                >
                  {feedback[item?.id]?.score}
                </Typography>
              </ListItemButton>
              <ListItemText sx={{ color: "#5E6C7D" }} primary={item?.name} />
            </ListItem>
            {index !== scoreList.length - 1 && (
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ borderWidth: "1px", borderColor: "black" }}
              />
            )}
          </div>
        ))}
      </List>

      {activeSection.sections &&
        Object.entries(activeSection.sections).map(
          ([sectionName, sectionData]) => (
            <FeedBack
              key={sectionName}
              sectionName={sectionName}
              sectionData={sectionData}
            />
          )
        )}
    </div>
  );
};

export default ScoreCard;
