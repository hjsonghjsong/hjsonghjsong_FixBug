import React, { useState } from "react";
import "./Settings.css";
import { Divider, ListItem, TextField, List } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import RenderSettingsList from "./RenderSettingsList";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("general");

  const settingOptions = [
    { id: "general", label: "General Settings", checked: true },
    { id: "privacy", label: "Privacy Settings", checked: false },
  ];

  const handleToggle = (sectionId) => () => {
    setActiveSection(sectionId);
  };

  return (
    <div className="flex flex-col w-full settings-container h-full">
      <div className="w-full flex justify-start settings-wrapper flex-grow">
        <div className="side-nav-container">
          <div className="side-nav h-full">
            <h2>Account Settings</h2>

            <RenderSettingsList
              settingOptions={settingOptions}
              activeSection={activeSection}
              handleToggle={handleToggle}
            />
          </div>
        </div>
        <div className="flex flex-col w-full content-container">
          {activeSection === "general" && (
            <div className="user-details-container flex flex-col gap-2">
              <div className="user-name">
                <h1>User.name</h1>
              </div>
              <div></div>

              <List
                className="user-details"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ListItem disablePadding className="avatar-container">
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <button className="btn-01">Change Profile Picture</button>
                </ListItem>
                <Divider />
                <ListItem disablePadding className="avatar-container">
                  <ListItemText primary="Name" />
                  <TextField fullWidth />
                </ListItem>
                <Divider />
                <ListItem disablePadding className="avatar-container">
                  <ListItemText primary="Email" />
                </ListItem>
                <Divider />
                <ListItem disablePadding className="avatar-container">
                  <ListItemText primary="Phone" />
                </ListItem>
                <Divider />
              </List>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
