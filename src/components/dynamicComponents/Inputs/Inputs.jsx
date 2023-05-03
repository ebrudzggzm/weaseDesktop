import React from "react";
import PropTypes from "prop-types";

const Inputs = ({
  extras,
  checked,
  label,
  label2,
  type,
  inputClassName,
  inputLayoutClassName,
  onChange,
  onClick,
  placeholder,
  layoutClassName,
  labelClassName,
  label2ClassName,
  iconFormat,
  inputRef,
  value,
}) => {
  return (
    <React.Fragment>
      <div className={layoutClassName}>
        <label className={labelClassName} htmlFor={label}>
          {label}
        </label>
        <div className={inputLayoutClassName}>
          <i className={iconFormat}></i>
          <input
            ref={inputRef}
            checked={checked}
            type={type}
            className={inputClassName}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
            value={value}
          />
          {extras !== undefined ? extras : ""}
          <label className={label2ClassName} htmlFor={label2}>
            {label2}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

Inputs.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  inputLayoutClassName: PropTypes.string,
  placeholder: PropTypes.string,
  layoutClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  iconFormat: PropTypes.string,
  extras: PropTypes.object,
};

export default Inputs;
