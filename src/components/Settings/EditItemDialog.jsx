import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CloseIcon from "@mui/icons-material/Close";

const EditItemDialog = ({ open, handleClose, detailsType, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    handleClose();
    // Here you can implement the logic to save the updated value to the database (Supabase)
  };

  const handleGoBack = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <div className="flex justify-between px-4 py-4">
        <IconButton onClick={handleGoBack}>
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogTitle>Edit {detailsType}</DialogTitle>
      <DialogContent sx={{ height: "290px" }}>
        {detailsType === "Name" ? (
          <Box
            sx={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
            <TextField
              fullWidth
              label="First Name"
              value={value.firstName}
              onChange={(e) =>
                setValue({ ...value, firstName: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Last Name"
              value={value.lastName}
              onChange={(e) => setValue({ ...value, lastName: e.target.value })}
            />
          </Box>
        ) : detailsType === "Phone" ? (
          <Box
            sx={{
              marginTop: "16px",

              gap: "32px",
            }}
          >
            <TextField
              fullWidth
              label="Phone"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
            <TextField
              fullWidth
              label={detailsType}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItemDialog;
