import React from "react";
import PropTypes from "prop-types";

const DefaultIcon = ({
  className,
  layoutStyles,
  iconStyles,
  onClick,
  onMouseEnter,
  onMouseLeave,
  iconRef,
}) => {
  return (
    <React.Fragment>
      <div style={layoutStyles}>
        <i
          ref={iconRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          style={iconStyles}
          className={className}
        ></i>
      </div>
    </React.Fragment>
  );
};

DefaultIcon.propTypes = {
  layoutStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  className: PropTypes.string,
};
export default DefaultIcon;
