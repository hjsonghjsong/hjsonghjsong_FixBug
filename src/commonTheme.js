import { createTheme } from '@mui/material';

export const theme =  createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black',
          },
        },
      },
    },
    MuiButton:{
      styleOverrides: {
        contained: {
          backgroundColor: 'black',
        },
      },
    },
    
  },
});
