import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "1px",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 800,
      letterSpacing: "1px",
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 700,
      letterSpacing: "1px",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 700,
      letterSpacing: "1px",
    },
    p: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "1px",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "black",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "black",
        },
      },
    },
  },
});
