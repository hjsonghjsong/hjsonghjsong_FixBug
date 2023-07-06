import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import SignUp from './SignUp';
import NavBarRouter from '../NavBarRouter';
import RenderNavBarList from './NavBarComponents/RenderNavBarList';
import RenderAccountMenuList from './AccountMenuComponents/RenderAccountMenuList';

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false); 

  const handleOpenDialog = (e) => {
    setOpen(!open);
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
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color="transparent" elevation={0} sx={{top: 0}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Argus
          </Typography>
          
          <RenderNavBarList handleCloseNavMenu={handleCloseNavMenu}/>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleOpenDialog}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Sign Up
                </Button>
                <SignUp open={open} setOpen={setOpen} />
              
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <Button onClick={handleOpenUserMenu} sx={{ my: 2, color: 'black'}} >
                My Account
              </Button>

            <RenderAccountMenuList 
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
            />
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <NavBarRouter />
  </Box>
  );
}
export default NavBar;
