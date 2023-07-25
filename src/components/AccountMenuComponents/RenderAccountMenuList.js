import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const settings = ["Account", "Logout"];

const RenderAccountMenuList = (props) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuIcons = {
    Account: <AccountBoxIcon color="action" fontSize="small" />,
    Logout: <LogoutIcon color="action" fontSize="small" />,
  };

  const handleLogout = () => {
    signOut();
    props.handleCloseUserMenu();
    navigate("/login");
  };
  const handleAccount = () => {
    props.handleCloseUserMenu();
    navigate("/settings");
  };

  function handleItemClick(setting) {
    switch (setting) {
      case "Account":
        return handleAccount;
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
        <MenuItem
          key={setting}
          onClick={handleItemClick(setting)}
          sx={{ gap: "8px" }}
        >
          {menuIcons[setting]}
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default RenderAccountMenuList;
