import React from "react";

const CountryFlags = (props) => {
  return (
    <React.Fragment>
      <span className={"fi fi-" + props.flag}>
        <span
          style={{
            marginLeft: "2rem",
          }}
        >
          {props.val}
        </span>
      </span>
    </React.Fragment>
  );
};

export default CountryFlags;
