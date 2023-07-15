import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";

const settings = ["Profile", "Account", "Logout"];

const RenderAccountMenuList = (props) => {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    window.location.href = "/login";
    props.handleCloseUserMenu();
  };

  function handleItemClick(setting) {
    switch (setting) {
      case "Logout":
        return handleLogout;
      default:
        return props.handleCloseUserMenu;
    }
  }

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={props.anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorElUser)}
      onClose={props.handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleItemClick(setting)}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default RenderAccountMenuList;
