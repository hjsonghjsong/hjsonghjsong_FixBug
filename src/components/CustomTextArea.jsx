import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CustomTextArea = (props) => {
  const [content, setContent] = useState(props.defaultValue || "");

  const handleChange = (event) => {
    const { value } = event.target;
    setContent(value);
  };

  return (
    <TextareaAutosize
      {...props}
      style={{
        width: "auto",
        minHeight: "28px", // Minimum height when empty
        fontSize: "16px", // Adjust as needed
        padding: "8px", // Adjust as needed
        resize: "none", // Prevent resizing handle
        overflow: "hidden", // Hide scrollbars
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
      value={content}
      onChange={handleChange}
      rowsMin={2} // Minimum number of rows when empty
    />
  );
};

export default CustomTextArea;
