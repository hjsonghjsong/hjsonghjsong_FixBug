import Box from "@mui/material/Box";
import { Menu, MenuItem, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const pages = ["Dashboard", "Resume", "About"];

const RenderNavBarMobile = (props) => (
  <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={props.handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={props.anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(props.anchorElNav)}
      onClose={props.handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages.map((page) => (
        <Link to={page} key={page} style={{ textDecoration: "none" }}>
          <MenuItem key={page} onClick={props.handleCloseNavMenu}>
            <Typography textAlign="center" sx={{ color: "black" }}>
              {page}
            </Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  </Box>
);

export default RenderNavBarMobile;
