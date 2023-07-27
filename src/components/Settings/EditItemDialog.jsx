import React, { useEffect, useState } from "react";
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

const EditItemDialog = ({
  open,
  handleClose,
  detailsType,
  initialValue,
  onSave,
}) => {
  console.log(initialValue);
  const { updateUser } = useAuth();
  const [successs, setSuccess] = useState(false);
  const [editedEmail, setEditedEmail] = useState(initialValue.email);
  const [editedPhone, setEditedPhone] = useState(initialValue.phone);
  const [firstName, setFirstName] = useState(initialValue.firstName);
  const [lastName, setLastName] = useState(initialValue.lastName);
  const handleSave = async () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: editedEmail,
      phone: editedPhone,
      fullName: firstName + " " + lastName,
    };
    try {
      setSuccess(false);
      await updateUser(userData);
      setSuccess(true);
      onSave(userData);
      handleClose();
    } catch (error) {
      setSuccess(false);
    } finally {
      setSuccess(false);
    }
  };

  const handleGoBack = () => {
    handleClose();
  };
  useEffect(() => {
    if (detailsType === "Name") {
      setFirstName(initialValue.firstName);
      setLastName(initialValue.lastName);
    } else if (detailsType === "Email") {
      setEditedEmail(initialValue);
    } else if (detailsType === "Phone") {
      setEditedPhone(initialValue);
    }
  }, [detailsType, initialValue]);

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
        ) : detailsType === "Email" ? (
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
              label="Email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            {successs ? (
              <div className="relative rounded-md border border-c py-4 px-6 flex space-x-4 items-center w-full bg-[#e9fcf2] verify-box mt-8">
                <div class=" text-[#3fcf8e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="sbui-icon "
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  A confirmation mail has been sent. Please verify your email
                </div>
              </div>
            ) : null}
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
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
          </Box>
        ) : null}
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
