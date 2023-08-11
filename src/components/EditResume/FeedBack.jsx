import React from "react";
import {
  Box,
  Collapse,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CircularProgressBar from "../CircularProgressBar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactsIcon from "@mui/icons-material/Contacts";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import RuleIcon from "@mui/icons-material/Rule";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";

const FeedBack = ({ sectionName, sectionData }) => {
  const [open, setOpen] = React.useState(false);
  const [isArrowRotated, setIsArrowRotated] = React.useState(false);
  console.log(sectionName, sectionData);
  const handleChange = () => {
    setOpen((prev) => !prev);

    setIsArrowRotated((prev) => !prev);
  };

  const feedbackIcons = {
    date_format: <CalendarMonthIcon color="action" />,
    no_of_pages: <DescriptionIcon color="action" />,
    contact_info: <ContactsIcon color="action" />,
    education: <RuleIcon color="action" />,
    missing_details_exp: <PriorityHighIcon color="action" />,
    essential_sections: <LabelImportantIcon color="action" />,
    teamwork: <GroupsIcon color="action" />,
    analytical: <PsychologyIcon color="action" />,
    initiative: <CampaignRoundedIcon color="action" />,
    communication: <RecordVoiceOverRoundedIcon color="action" />,
  };

  const sectionContentMapping = {
    // Format data
    education: (
      <List>
        {sectionData?.irrelevant_courses?.map((course, index) => (
          <ListItem key={index}>
            <Typography sx={{ color: "#F04438" }}>{course}</Typography>
          </ListItem>
        ))}
      </List>
    ),

    contact_info: (
      <List>
        {sectionData?.missing_information && (
          <>
            <ListItem>
              <Typography sx={{ fontWeight: "700", color: "#F04438" }}>
                Missing Information
              </Typography>
            </ListItem>
            {sectionData?.missing_information?.map((info, index) => (
              <ListItem key={index}>
                <Typography>{info}</Typography>
              </ListItem>
            ))}
          </>
        )}
      </List>
    ),

    date_format: (
      <List>
        {sectionData?.date_format === "wrong" ? (
          <ListItem>
            <Typography sx={{ color: "#F04438" }}>Wrong Date Format</Typography>
          </ListItem>
        ) : (
          <ListItem>
            <Typography sx={{ color: "#24C63D" }}>
              Correct Date Format
            </Typography>
          </ListItem>
        )}

        <ListItem>
          <Typography>{sectionData?.expected_date_format}</Typography>
        </ListItem>
      </List>
    ),

    essential_sections: (
      <List>
        {sectionData?.missing_sections?.map((info, index) => (
          <ListItem key={index}>
            <Typography>{info}</Typography>
          </ListItem>
        ))}
      </List>
    ),

    missing_details_exp: (
      <List>
        {sectionData?.missing_details?.map((info, index) => (
          <ListItem key={index}>
            <Typography>{info}</Typography>
          </ListItem>
        ))}
      </List>
    ),

    no_of_pages: (
      <List>
        {sectionData?.length === "short" ? (
          <ListItem>
            <Typography sx={{ color: "#F04438" }}>
              Resume is currently too short. It should be 1.5 page.
            </Typography>
          </ListItem>
        ) : null}
      </List>
    ),

    analytical: (
      <List>
        {sectionData?.length === "short" ? (
          <ListItem>
            <Typography sx={{ color: "#F04438" }}>
              Resume is currently too short
            </Typography>
          </ListItem>
        ) : null}
      </List>
    ),
  };

  return (
    <div className="w-full flex flex-col gap-1 justify-center">
      <div className=" justify-end feedback-container gap-5">
        <div className="w-full flex justify-between items-center">
          <div className="flex w-full gap-3 items-center ">
            {feedbackIcons[sectionName]}
            <Typography
              sx={{
                fontWeight: "600",
                alignSelf: "center",
              }}
            >
              {sectionData?.Name}
            </Typography>
            <Typography
              sx={{
                color: "#8E98A8",
                fontSize: "14px",
                alignSelf: "center",
                mt: "2px",
                fontWeight: "500",
              }}
            >
              {sectionData?.feedback?.toLowerCase()}
            </Typography>
          </div>
          {sectionData?.score !== undefined && (
            <CircularProgressBar
              size={45}
              score={sectionData.score}
              fontSize={14}
            />
          )}
        </div>

        <div className="flex items-end justify-end ">
          <FormControlLabel
            sx={{ margin: 0 }}
            control={
              <IconButton sx={{ padding: "0px" }} onClick={handleChange}>
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    color: "action",
                    transform: isArrowRotated
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </IconButton>
            }
          />
          <div className="w-10">
            <h5>{isArrowRotated ? "Hide" : "Show"}</h5>
          </div>
        </div>
      </div>

      {/* Feedback points */}
      <div>
        <Collapse sx={{ width: "100%" }} in={open}>
          <Paper sx={{ m: 0.5 }} elevation={2}>
            <Box component="div" sx={{ width: "100%" }}>
              {sectionContentMapping[sectionName]}
            </Box>
          </Paper>
        </Collapse>
      </div>
    </div>
  );
};

export default FeedBack;
