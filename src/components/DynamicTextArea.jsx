import React, { useState, useRef, useEffect } from "react";

const DynamicTextArea = (props) => {
  const { value, onChange, ...restProps } = props;
  const [content, setContent] = useState(value);
  const textareaRef = useRef(null);

  useEffect(() => {
    setContent(value);
    adjustHeight();
  }, [value]);

  useEffect(() => {
    adjustHeight();
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "28px"; // Set the initial height
      textareaRef.current.style.height = `${Math.max(
        28, // Minimum height of 28px
        textareaRef.current.scrollHeight
      )}px`;
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setContent(value);
    adjustHeight();
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={handleChange}
      style={{
        overflow: "hidden",
        borderRadius: "4px",
        resize: "none",
        boxSizing: "border-box",
        width: "100%",
        wordWrap: "break-word",
      }}
      {...restProps}
    />
  );
};

export default DynamicTextArea;
