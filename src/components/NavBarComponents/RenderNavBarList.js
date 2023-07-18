import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ['dashboard', 'resume'];

const RenderNavBarList = (props) => (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page} key={page} style={{ textDecoration: 'none' }}>
              <Button
                key={page}
                onClick={props.handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
);

export default RenderNavBarList;
