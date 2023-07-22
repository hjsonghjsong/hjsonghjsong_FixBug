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
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (success || error) {
      setShowMessage(true);

      const timer = setTimeout(
        () => {
          setShowMessage(false);
        },
        success ? 5000 : 10000
      ); // Show success message for 5 seconds, and error message for 10 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [success, error]);

  if (loading || showMessage) {
    return (
      <div className="flex items-end justify-center">
        <div className="flex justify-center items-center loading-component bg-white ">
          <div className=" flex items-center gap-2 justify-center">
            {loading && (
              <CircularProgress
                size={15}
                sx={{ height: "15px", width: "15px" }}
              />
            )}
            {success && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                beat
                style={{ color: "#4ec125" }}
              />
            )}
            {error && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                shake
                style={{ color: "#ff4b4b" }}
              />
            )}
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
