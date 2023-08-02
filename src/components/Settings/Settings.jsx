import React, { useState } from "react";
import "./Settings.css";
import {
  ListItem,
  List,
  Chip,
  IconButton,
  Divider,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import RenderSettingsList from "./RenderSettingsList";
import { useAuth } from "../../Contexts/Auth";
import UserDetailsDisplay from "./UserDetailsDisplay";
import DetailsEditDialog from "./DetailsEditDialog";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("general");
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };

  const [fName, Lname] = user?.user_metadata?.full_name?.split(" ") || [
    null,
    null,
  ];

  const [userData, setUserData] = useState({
    first_name: capitalizeFirstLetter(user?.user_metadata?.first_name) || fName,
    last_name: capitalizeFirstLetter(user?.user_metadata?.last_name) || Lname,
    email: user?.new_email || user?.email,
    phone: user?.user_metadata?.phone || "",
    display_name:
      user?.user_metadata?.display_name || user?.user_metadata?.full_name,
    avatar_url: user?.user_metadata.avatar_url,
  });

  const settingOptions = [
    { id: "general", label: "General Settings", checked: true },
    { id: "privacy", label: "Privacy Settings", checked: false },
  ];

  const handleSaveUserData = (updatedUserData) => {
    setUserData((prevUserData) => ({ ...prevUserData, ...updatedUserData }));
  };

  const handleToggle = (sectionId) => () => {
    setActiveSection(sectionId);
  };

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleReset = () => {
    navigate("/forgot-password");
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

                    flex: "inline",
                  }}
                >
                  <div className="items-center justify-center gap-6 flex">
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ height: "56px", width: "56px" }}
                      src={userData.avatar_url}
                    ></Avatar>
                    <Typography variant="h1">
                      {userData.display_name}
                    </Typography>
                  </div>

                  <Chip
                    onClick={handleOpen}
                    label="Edit"
                    icon={<EditIcon fontSize="small" />}
                    clickable
                  />
                </ListItem>
                <Divider
                  sx={{
                    marginBottom: "24px",
                  }}
                />

                <UserDetailsDisplay
                  label="Name"
                  value={userData.display_name}
                />
                <UserDetailsDisplay label="Email" value={userData.email} />
                <UserDetailsDisplay label="Phone" value={userData.phone} />
              </List>
            </div>
          )}
          {activeSection === "privacy" && (
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
                <ListItem>
                  <ListItemText primary="Reset Password" />

                  <Chip
                    onClick={handleReset}
                    label="Reset"
                    icon={<LockResetRoundedIcon fontSize="small" />}
                    clickable
                  />
                </ListItem>
                <Divider />
              </List>
            </div>
          )}
        </div>
      </div>
      <DetailsEditDialog
        open={openDialog}
        handleClose={handleClose}
        firstName={userData.first_name}
        lastName={userData.last_name}
        email={userData.email}
        phone={userData.phone}
        fullName={userData.display_name}
        avatar={userData.avatar_url}
        onSave={handleSaveUserData}
      />
    </div>
  );
};

export default Settings;
