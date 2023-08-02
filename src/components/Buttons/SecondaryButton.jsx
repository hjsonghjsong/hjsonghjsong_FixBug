import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const SecondaryButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: "#35476d",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontFamily: "inherit",
  fontWeight: 600,
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#26324d",
  },
}));
const SecondaryButton = ({ text, handleButton, ...props }) => {
  return (
    <SecondaryButtonStyled
      variant="contained"
      onClick={handleButton}
      {...props}
    >
      {text}
    </SecondaryButtonStyled>
  );
};

export default SecondaryButton;
