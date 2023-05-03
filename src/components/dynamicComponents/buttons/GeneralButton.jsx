import React from "react";
import PropTypes from "prop-types";

const GeneralButton = ({ className, text, onClick, icon }) => {
  return (
    <React.Fragment>
      <button onClick={onClick} className={className}>
        {icon}
        &nbsp;
        {text}
      </button>
    </React.Fragment>
  );
};

GeneralButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.any,
  onClick: PropTypes.func,
  icon: PropTypes.object,
};

export default GeneralButton;
