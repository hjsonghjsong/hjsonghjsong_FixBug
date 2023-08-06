import React, { useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton, ImageListItem, List } from "@mui/material";
import "./Template.css";
import template1 from "../../Utils/Images/TemplateImages/template1.png";
import template2 from "../../Utils/Images/TemplateImages/template2.png";
import template3 from "../../Utils/Images/TemplateImages/template3.png";
import template4 from "../../Utils/Images/TemplateImages/template4.png";
import template5 from "../../Utils/Images/TemplateImages/template5.png";
import template6 from "../../Utils/Images/TemplateImages/template6.png";

const templates = [
  { img: template1, title: "Template 1" },
  { img: template2, title: "Template 2" },
  { img: template3, title: "Template 3" },
  { img: template4, title: "Template 4" },
  { img: template5, title: "Template 5" },
  { img: template6, title: "Template 6" },
];

const Template = () => {
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  const showNextTemplate = () => {
    setCurrentTemplateIndex((currentTemplateIndex + 1) % templates.length);
  };

  const showPrevTemplate = () => {
    setCurrentTemplateIndex(
      (currentTemplateIndex - 1 + templates.length) % templates.length
    );
  };

  const isFirstTemplate = currentTemplateIndex === 0;
  const isLastTemplate = currentTemplateIndex === templates.length - 1;

  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center">
        <IconButton onClick={showPrevTemplate} disabled={isFirstTemplate}>
          <ArrowBackIosNewRoundedIcon
            sx={{ color: isFirstTemplate ? "gray" : "white" }}
          />
        </IconButton>
      </div>
      <List>
        <img
          className="template-img"
          src={templates[currentTemplateIndex].img}
          alt={templates[currentTemplateIndex].title}
          loading="lazy"
        />
      </List>
      <div className="flex justify-center items-center">
        <IconButton onClick={showNextTemplate} disabled={isLastTemplate}>
          <ArrowForwardIosRoundedIcon
            sx={{ color: isLastTemplate ? "gray" : "white" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Template;
