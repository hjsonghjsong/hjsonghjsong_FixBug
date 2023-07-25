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
import { useAuth } from "../../Contexts/Auth";
import { supabase } from "../../SupabaseCL";

const EditItemDialog = ({ open, handleClose, detailsType, initialValue }) => {
  const { user, updateUser } = useAuth();
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.user_metadata?.phone);
  const [firstName, setFirstName] = useState(user?.user_metadata?.first_name);
  const [lastName, setLastName] = useState(user?.user_metadata?.last_name);

  const handleSave = async (e) => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    try {
      await updateUser(userData);
      handleClose();
    } catch (error) {
      throw error;
    }
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
              padding: "20px 24px",
            }}
          >
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        ) : detailsType === "Phone" ? (
          <Box
            sx={{
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
              padding: "20px 24px",
            }}
          >
            <TextField
              fullWidth
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              padding: "20px 24px",
            }}
          >
            <TextField
              fullWidth
              label={detailsType}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
