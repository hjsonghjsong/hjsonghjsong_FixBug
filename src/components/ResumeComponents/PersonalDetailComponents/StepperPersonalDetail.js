import { TextField, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import RenderSocialList from "./RenderSocialList";
import PersonalDetail from "../../../models/PersonalDetail";
function StepperPersonalDetail(props) {
  const { personalDetail, setPersonalDetail } = props;
  const handleChange = (event) => {
    setPersonalDetail({
      ...personalDetail,
      [event.target.name]: event.target.value,
    });
  };
  const addSocialLink = () => {
    let obj = { ...personalDetail };
    obj.socialList.push(new PersonalDetail().InitialSocialDetailState);
    setPersonalDetail({ ...personalDetail, socialList: obj.socialList });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexdirection: "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          type="text"
          value={personalDetail.firstName}
          name="firstName"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Last Name"
          type="text"
          value={personalDetail.lastName}
          name="lastName"
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexdirection: "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <TextField
          margin="dense"
          label="Email Address"
          type="text"
          value={personalDetail.email}
          name="email"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Phone Number"
          type="text"
          value={personalDetail.phone}
          name="phone"
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexdirection: "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box width="50%">
          <TextField
            margin="dense"
            label="City"
            type="text"
            value={personalDetail.city}
            name="city"
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box width="50%">
          <TextField
            margin="dense"
            label="State/Province"
            type="text"
            value={personalDetail.state}
            name="state"
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box width="50%">
          <TextField
            margin="dense"
            label="Zip Code"
            type="text"
            value={personalDetail.zip}
            name="zip"
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </Box>
      <Box>
        <Button onClick={addSocialLink}>
          <Add />
          <Typography>Add Social Links</Typography>
        </Button>
      </Box>
      <RenderSocialList personalDetailState={props} />
    </Box>
  );
}

export default StepperPersonalDetail;
