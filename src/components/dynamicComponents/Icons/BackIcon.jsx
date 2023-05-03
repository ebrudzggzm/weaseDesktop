import React from "react";
import PropTypes from "prop-types";

const BackIcon = ({ layoutStyles, iconStyles, onClick }) => {
  return (
    <React.Fragment>
      <div style={layoutStyles} className="backIcon">
        <i
          onClick={onClick}
          style={iconStyles}
          className="bi bi-arrow-left-circle"
        ></i>
      </div>
    </React.Fragment>
  );
};

BackIcon.propTypes = {
  layoutStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  onClick: PropTypes.func,
};

export default BackIcon;
