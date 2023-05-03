import React from "react";
import PropTypes from "prop-types";

const LeftBubble = ({ message }) => {
  return (
    <>
      <div className="speech-wrapper">
        <div className="chatbox_other triangle left-top alt2">
          <div className="txt">
            <span className="msgContent2">{message}</span>
            <span className="timestamp">10:20 pm </span>
          </div>
        </div>
      </div>
    </>
  );
};

LeftBubble.propTypes = {
  message: PropTypes.string,
};

export default LeftBubble;
