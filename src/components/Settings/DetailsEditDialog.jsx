import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Button,
  DialogActions,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import EditItemDialog from "./EditItemDialog";
import SecondaryButton from "../Buttons/SecondaryButton";

const DetailsEditDialog = ({
  open,
  handleClose,
  firstName,
  lastName,
  email,
  phone,
  fullName,
  onSave,
  avatar,
}) => {
  const detailsList = ["Name", "Email", "Phone"];
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [first_name, last_name] = fullName ? fullName.split(" ") : ["", ""];

  const handleEdit = (detail) => {
    console.log("Selected Detail:", detail);
    setSelectedDetail(detail || "");
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <div className="flex flex-row justify-between">
          <DialogTitle sx={{ fontWeight: "bold", fontSize: 24 }}>
            <Typography variant="h2">Personal Information</Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <Avatar
            sx={{ height: "56px", width: "56px" }}
            alt="Remy Sharp"
            src={avatar}
          ></Avatar>
          <Typography variant="h3">{`${firstName} ${lastName}`}</Typography>
        </div>
        <DialogContent sx={{ height: "265px" }}>
          <DialogContentText>
            <List sx={{}}>
              {detailsList.map((details) => (
                <React.Fragment key={details}>
                  <ListItem>
                    <ListItemButton
                      onClick={() => handleEdit(details)}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography>{details}</Typography>
                      <ArrowForwardIosRoundedIcon fontSize="normal" />
                    </ListItemButton>
                  </ListItem>
                  <Divider
                    sx={{
                      margin: "0px 24px",
                    }}
                  />
                </React.Fragment>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>

        <div className="mb-2">
          <DialogActions>
            <SecondaryButton handleButton={handleClose} text="Done" />
          </DialogActions>
        </div>
      </Dialog>

      <EditItemDialog
        open={editDialogOpen}
        handleClose={handleEditDialogClose}
        detailsType={selectedDetail}
        initialValue={
          selectedDetail === "Name"
            ? { firstName: firstName, lastName: lastName }
            : selectedDetail === "Phone"
            ? phone
            : selectedDetail === "Email"
            ? email
            : ""
        }
        onSave={(updatedValue) => {
          if (selectedDetail === "Name") {
            onSave({
              first_name: updatedValue.firstName,
              last_name: updatedValue.lastName,
              display_name: updatedValue.fullName,
            });
          } else if (selectedDetail === "Email") {
            onSave({ email: updatedValue.email });
          } else if (selectedDetail === "Phone") {
            onSave({ phone: updatedValue.phone });
          }
        }}
      />
    </React.Fragment>
  );
};

export default DetailsEditDialog;
