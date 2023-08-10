import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Divider } from '@mui/material';
import SignUp from "./SignUp";
import WebLogin from "../../Login/WebLogin";
import useLocalStorage from 'use-local-storage';

export default function ShowSignUpLogin(props) {
  const [open, setOpen] = React.useState(props.state.openDialog);
  const [openPage, setOpenPage] = React.useState(false);
  const [_, setLoginState] = useLocalStorage('loginState', props.state);
  
  const toggleButton = () => {
        setOpenPage(!openPage);
    }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{width: '30em', height: '30em'}}>
            <Box sx={{display: 'flex'}}>
            <Box sx={{width: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <Button onClick={toggleButton}>Sign Up</Button>
            </Box>
            <Box sx={{width: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <Button onClick={toggleButton}>Login</Button>
            </Box>
            </Box>
            <Divider />
            <Box>
                {openPage ? (
                    <Box sx={{paddingX: '10px'}}>
                    <SignUp state={props.state} />
                    </Box>
                ) : (
                    <Box sx={{paddingX: '10px'}}>
                    <WebLogin state={props.state}/>
                    </Box>
                )}
            </Box>
        </Box>
      </Dialog>
    </div>
  );
}