import React, { useState, useRef, useEffect } from "react";

const DynamicWidthInput = (props) => {
  const [content, setContent] = useState(props.value || "");
  const [inputWidth, setInputWidth] = useState("auto");
  const inputRef = useRef(null);

  useEffect(() => {
    adjustWidth();
  }, [content]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === props.name) {
      setContent(value);
    }
  };

  const adjustWidth = () => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
      const placeholderWidth = measureTextWidth(props.placeholder);
      const contentWidth = measureTextWidth(content);
      const maxWidth = Math.max(placeholderWidth, contentWidth);
      setInputWidth(`${maxWidth}px`);
    }
  };

  const measureTextWidth = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${props.fontSize || "16px"} ${
      props.fontFamily || "sans-serif"
    }`;
    return context.measureText(text).width;
  };

  return (
    <input
      ref={inputRef}
      value={content}
      onChange={handleChange}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className={props.className}
      style={{
        minWidth: "50px",
        borderRadius: "4px",
        boxSizing: "border-box",
        maxWidth: "100%",
        width: inputWidth,
      }}
    />
  );
};

export default DynamicWidthInput;
