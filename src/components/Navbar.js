import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import SignUp from "./Signup/SignUp";
import NavBarRouter from "../NavBarRouter";
import RenderNavBarList from "./NavBarComponents/RenderNavBarList";
import RenderAccountMenuList from "./AccountMenuComponents/RenderAccountMenuList";
import RenderNavBarMobile from "./NavBarComponents/RenderNavBarMobile";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";
import Loading from "./LoadingComponent/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { session } = useAuth();

  const handleOpenDialog = (e) => {
    setOpen(!open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <AppBar
        id="nav-bar"
        position="sticky"
        elevation={0}
        sx={{ top: 0, zIndex: 2 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              MyCareerChoice
            </Typography>
            <RenderNavBarMobile
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />

            <RenderNavBarList handleCloseNavMenu={handleCloseNavMenu} />

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                gap: "24px",
              }}
            >
              {session ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{ my: 2, color: "white" }}
                  >
                    My Account
                  </Button>

                  <RenderAccountMenuList
                    anchorElUser={anchorElUser}
                    handleCloseUserMenu={handleCloseUserMenu}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={handleOpenDialog}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign Up
                  </Button>

                  <Link to="/login">
                    <Button
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        backgroundColor: "#437EF7",
                      }}
                    >
                      Login
                    </Button>
                  </Link>

                  <SignUp open={open} setOpen={setOpen} />
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="m-2 loading-box fixed top-13 right-0">
        <Loading />
      </div>

      <NavBarRouter />
    </Box>
  );
}

export default NavBar;
