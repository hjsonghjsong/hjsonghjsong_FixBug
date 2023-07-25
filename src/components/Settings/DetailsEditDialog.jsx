import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
  Button,
  DialogActions,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import EditItemDialog from "./EditItemDialog";

const DetailsEditDialog = ({
  open,
  handleClose,
  firstName,
  lastName,
  email,
  phone,
}) => {
  const detailsList = ["Name", "Email", "Phone"];
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleEdit = (detail) => {
    setSelectedDetail(detail);
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
            Personal Information
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
          <Avatar>
            <ImageIcon />
          </Avatar>
          <h2 className="text-lg">{`${lastName} ${firstName}`}</h2>
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
                      <Typography sx={{ fontWeight: "bold" }}>
                        {details}
                      </Typography>
                      <ArrowForwardIosRoundedIcon fontSize="normal" />
                    </ListItemButton>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>

        <div className="mb-2">
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
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
            : selectedDetail === "Email"
            ? email
            : selectedDetail === "Phone"
            ? phone
            : ""
        }
      />
    </React.Fragment>
  );
};

export default DetailsEditDialog;
