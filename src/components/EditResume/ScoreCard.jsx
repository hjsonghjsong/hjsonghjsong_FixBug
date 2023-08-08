import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const ScoreCard = () => {
  const scoreList = ["Format", "Softskills", "Bullet Points"];

  return (
    <div className="flex flex-col gap-4 items-start w-full ">
      <Typography variant="h3" sx={{ fontSize: "18px", lineHeight: "normal" }}>
        Overview
      </Typography>
      <List sx={{ display: "flex", width: "100%" }}>
        {scoreList.map((item, index) => (
          <div className="flex w-full">
            <ListItem
              disablePadding
              sx={{ display: "flex", flexDirection: "column" }}
              key={index}
            >
              <ListItemButton>
                <Typography
                  sx={{
                    fontSize: "52px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    fontFamily: "inter",
                  }}
                >
                  65%
                </Typography>
              </ListItemButton>
              <ListItemText primary={item} />
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
    </div>
  );
};

export default ScoreCard;
