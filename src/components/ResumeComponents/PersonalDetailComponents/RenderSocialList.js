import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const RenderSocialList = (props) => {
  const { personalDetail, setPersonalDetail } = props.personalDetailState;
  const handleSocialChange = (event, index) => {
    const list = [...personalDetail.socialList];
    list[index][event.target.name] = event.target.value;
    setPersonalDetail({ ...personalDetail, socialList: list });
  };
  const deleteSocialLink = (index) => {
    let obj = { ...personalDetail };
    obj.socialList.splice(index, 1);
    setPersonalDetail(obj);
  };

  return (
    <Box>
      {personalDetail?.socialList.map((value, key) => (
        <Box key={key} sx={{ display: "flex" }}>
          <Box
            width="100%"
            sx={{ justifyContent: "space-between", gap: "20px" }}
          >
            <TextField
              margin="dense"
              label="Social Website"
              type="text"
              value={personalDetail?.socialList[key]?.source}
              onChange={(event) => handleSocialChange(event, key)}
              name="source"
              fullWidth
            />
            <TextField
              margin="dense"
              label="Website URL"
              type="text"
              value={value.website}
              onChange={(event) => handleSocialChange(event, key)}
              name="website"
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => deleteSocialLink(key)}>
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RenderSocialList;
