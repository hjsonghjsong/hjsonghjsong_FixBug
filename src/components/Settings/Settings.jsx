import React, { useState } from "react";
import "./Settings.css";
import {
  Divider,
  ListItem,
  TextField,
  List,
  Button,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import RenderSettingsList from "./RenderSettingsList";
import { useAuth } from "../../Contexts/Auth";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("general");
  const { user } = useAuth();

  const settingOptions = [
    { id: "general", label: "General Settings", checked: true },
    { id: "privacy", label: "Privacy Settings", checked: false },
  ];

  const handleToggle = (sectionId) => () => {
    setActiveSection(sectionId);
  };
  const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };

  return (
    <div className="flex flex-col w-full settings-container h-full">
      <div className="w-full flex justify-start settings-wrapper flex-grow">
        <div className="side-nav-container">
          <div className="side-nav h-full">
            <h2 className="py-2">ACCOUNT SETTINGS</h2>

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
              <List
                className="user-details"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px 48px",
                }}
              >
                <ListItem
                  disablePadding
                  className="avatar-container"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                    flex: "inline",
                  }}
                >
                  <div className="flex items-center justify-center gap-6">
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <h2 className="font-semibold  text-3xl">
                      {capitalizeFirstLetter(user?.user_metadata?.last_name)}{" "}
                      {capitalizeFirstLetter(user?.user_metadata?.first_name)}
                    </h2>
                  </div>
                  <button className="avatar-button">
                    Change Profile Picture
                  </button>
                </ListItem>
                <ListItem
                  disablePadding
                  className="avatar-container"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "32px",
                  }}
                >
                  <ListItemText
                    disablePadding
                    primary="First name"
                    secondary={capitalizeFirstLetter(
                      user?.user_metadata?.first_name
                    )}
                  />
                  <ListItemText
                    disablePadding
                    primary="Last name"
                    secondary={capitalizeFirstLetter(
                      user?.user_metadata?.last_name
                    )}
                  />
                  <Chip
                    label="Edit"
                    icon={<EditIcon fontSize="small" />}
                    clickable
                  />
                </ListItem>
                <Divider />

                <ListItem
                  disablePadding
                  className="avatar-container"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "32px",
                  }}
                >
                  <ListItemText primary="Email" secondary={user.email} />
                  <Chip
                    label="Edit"
                    icon={<EditIcon fontSize="small" />}
                    clickable
                  />
                </ListItem>
                <Divider />

                <ListItem
                  disablePadding
                  className="avatar-container"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText
                    primary="Phone"
                    secondary={user?.user_metadata?.phone}
                  />

                  <Chip
                    label="Edit"
                    icon={<EditIcon fontSize="small" />}
                    clickable
                  />
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
