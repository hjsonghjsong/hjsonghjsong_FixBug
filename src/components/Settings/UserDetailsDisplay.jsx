import { ListItem, ListItemText, Divider } from "@mui/material";

const UserDetailsDisplay = ({ label, value }) => {
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
        <ListItemText
          primary={label}
          secondary={value ? value : `Add ${label}`}
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default UserDetailsDisplay;
