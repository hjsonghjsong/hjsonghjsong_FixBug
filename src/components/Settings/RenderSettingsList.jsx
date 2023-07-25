import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Settings from "./Settings";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const RenderSettingsList = ({
  settingOptions,
  activeSection,
  handleToggle,
}) => {
  const iconMap = {
    general: <SettingsIcon color="action" />,

    privacy: <ManageAccountsIcon color="action" />,
  };
  return (
    <List>
      {settingOptions.map((section) => (
        <React.Fragment key={section.id}>
          <ListItem>
            <ListItemButton
              onClick={handleToggle(section.id)}
              sx={{ gap: "5px" }}
            >
              {iconMap[section.id]}
              <ListItemText
                primary={section.label}
                sx={{
                  color: activeSection === section.id ? "#437ef7" : "inherit",
                  fontWeight: activeSection === section.id ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.2)" }} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RenderSettingsList;
