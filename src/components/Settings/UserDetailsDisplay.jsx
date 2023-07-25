import { ListItem, ListItemText, Divider, Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserDetailsDisplay = ({ label, value, onEdit }) => {
  return (
    <>
      <ListItem
        disablePadding
        className="avatar-container"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        <ListItemText primary={label} secondary={value} />
      </ListItem>
      <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.2)" }} />
    </>
  );
};

export default UserDetailsDisplay;
