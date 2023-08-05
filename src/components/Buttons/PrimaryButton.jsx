import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrimaryButton = ({ text, handleButton, icon, ...props }) => {
  const PrimaryButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: "#3059af",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "inherit",
    fontWeight: 600,
    borderRadius: 4,

    "&:hover": {
      backgroundColor: "#437ef7",
    },
  }));

  return (
    <PrimaryButtonStyled
      variant="contained"
      startIcon={icon}
      onClick={handleButton}
      {...props}
    >
      {text}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;
