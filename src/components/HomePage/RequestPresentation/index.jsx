import React from "react";
import PropTypes from "prop-types";

const RequestPresentation = ({ setTryForFree }) => {
  const handleRequestPresentation = () => {
    setTryForFree(true);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="row mt-5"></div>
        <div className="row mt-5"></div>
        <div className="row mt-5"></div>
        <div className="col-sm-5  d-flex justify-content-center align-items-start flex-column">
          <span className="requestPresentationText">
            Response fast, track your leads easily. All in one dashboard.
          </span>
          <button
            onClick={handleRequestPresentation}
            className="btn mt-5 requestPresentationButton"
          >
            Request Presentation
          </button>
        </div>
        <div className="col-sm-7 mt-5 requestPresentationRightColumnBg"></div>
      </div>
    </React.Fragment>
  );
};

RequestPresentation.propTypes = {
  setTryForFree: PropTypes.func,
};

export default RequestPresentation;
