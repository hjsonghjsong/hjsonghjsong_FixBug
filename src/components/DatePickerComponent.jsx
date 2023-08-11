import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/system";

const CustomMobileDatePicker = styled(MobileDatePicker)(({ theme }) => ({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "red",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "red",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 8px",
    height: "28px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
  },
}));

const DatePickerComponent = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomMobileDatePicker {...props} />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
