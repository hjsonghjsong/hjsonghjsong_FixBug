import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import { useState } from "react";

const RenderSettingsList = ({
  settingOptions,
  activeSection,
  handleToggle,
}) => {
  return (
    <List>
      {settingOptions.map((section) => (
        <React.Fragment key={section.id}>
          <ListItem>
            <ListItemButton onClick={handleToggle(section.id)}>
              <ListItemText
                primary={section.label}
                sx={{
                  color: activeSection === section.id ? "#437ef7" : "inherit",
                  fontWeight: activeSection === section.id ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RenderSettingsList;
