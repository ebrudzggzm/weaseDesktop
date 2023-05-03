import React from "react";

const ActiveButton = ({ onClick, isActiveButton }) => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: isActiveButton === false ? "grey" : "#4a8869",
        }}
        onClick={onClick}
        className="activeButtonLayout"
      >
        <div
          style={{
            marginLeft: isActiveButton === false ? "1.5rem" : "0px",
          }}
          className="activeButtonOnnOff"
        ></div>
      </div>
    </React.Fragment>
  );
};

export default ActiveButton;
