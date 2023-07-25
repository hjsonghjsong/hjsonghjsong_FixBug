import React, { useState } from "react";
import "./Settings.css";
import {
  ListItem,
  TextField,
  List,
  Button,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import RenderSettingsList from "./RenderSettingsList";
import { useAuth } from "../../Contexts/Auth";
import UserDetailsDisplay from "./UserDetailsDisplay";
import { faL } from "@fortawesome/free-solid-svg-icons";
import DetailsEditDialog from "./DetailsEditDialog";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("general");
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);

  const settingOptions = [
    { id: "general", label: "General Settings", checked: true },
    { id: "privacy", label: "Privacy Settings", checked: false },
  ];
  const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };

  const first_name = capitalizeFirstLetter(user?.user_metadata?.first_name);
  const last_name = capitalizeFirstLetter(user?.user_metadata?.last_name);
  const email = user?.email;
  const phone = user?.phone;

  const handleToggle = (sectionId) => () => {
    setActiveSection(sectionId);
  };

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
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
                  <div className="items-center justify-center gap-6 flex">
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <h2 className="font-semibold  text-3xl">
                      {last_name} {first_name}
                    </h2>
                  </div>

                  <IconButton onClick={handleOpen}>
                    <Chip
                      label="Edit"
                      icon={<EditIcon fontSize="small" />}
                      clickable
                    />
                  </IconButton>
                </ListItem>

                <UserDetailsDisplay
                  label="Name"
                  value={`${last_name} ${first_name}`}
                />
                <UserDetailsDisplay label="Email" value={email} />
                <UserDetailsDisplay label="Phone" value={phone} />
              </List>
            </div>
          )}
        </div>
      </div>
      <DetailsEditDialog
        open={openDialog}
        handleClose={handleClose}
        firstName={first_name}
        lastName={last_name}
        email={email}
        phone={phone}
      />
    </div>
  );
};

export default Settings;
