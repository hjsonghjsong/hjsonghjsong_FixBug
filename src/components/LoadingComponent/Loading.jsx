import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loading.css";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Loading = () => {
  const { loading, message, success, error } = useAuth();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    } else if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 10000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [success, error]);

  if (loading) {
    return (
      <div className="flex items-end justify-center">
        <div className="flex justify-center items-center loading-component bg-white ">
          <div className=" flex items-center gap-2 justify-center">
            <CircularProgress
              size={15}
              sx={{ height: "15px", width: "15px" }}
            />
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  } else if (showSuccess) {
    return (
      <div id="second" className="flex items-end justify-center">
        <div className="flex justify-center items-center loading-component bg-white">
          <div className="flex items-center gap-2 justify-center">
            <div className="">
              <FontAwesomeIcon
                icon={faCircleCheck}
                beat
                style={{ color: "#4ec125" }}
              />
            </div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  } else if (showError) {
    return (
      <div id="one" className="flex items-end justify-center">
        <div className="flex justify-center items-center loading-component bg-white">
          <div className="flex items-center gap-2 justify-center">
            <div className="">
              <FontAwesomeIcon
                icon={faCircleXmark}
                shake
                style={{ color: "#ff4b4b" }}
              />
            </div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
