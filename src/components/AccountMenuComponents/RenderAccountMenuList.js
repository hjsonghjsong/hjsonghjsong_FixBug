import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Profile', 'Account', 'Logout'];

const RenderAccountMenuList = (props) => (

    <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={props.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(props.anchorElUser)}
              onClose={props.handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={props.handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
);

export default RenderAccountMenuList;