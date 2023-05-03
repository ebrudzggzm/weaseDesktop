import React from "react";
import PropTypes from "prop-types";

const DropDownModal = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

DropDownModal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default DropDownModal;
