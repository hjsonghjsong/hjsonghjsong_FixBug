import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
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
    <List disablePadding>
      {settingOptions.map((section) => (
        <React.Fragment key={section.id}>
          <ListItem>
            <ListItemButton
              onClick={handleToggle(section.id)}
              sx={{ gap: "16px" }}
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
          <Divider sx={{ backgroundColor: "white" }} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RenderSettingsList;
