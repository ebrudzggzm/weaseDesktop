import React from "react";
import PropTypes from "prop-types";

const RightBubble = ({ message }) => {
  return (
    <>
      <div className="speech-wrapper">
        <div className="chatbox triangle right-top alt">
          <div className="txt">
            <span className="msgContent">{message}</span>
            <span className="timestamp">
              10:20 pm
              <img
                style={{ marginLeft: "5px", marginBottom: "2px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVR4nNXRsWoCYRAE4I+ICAqRiJ0ElFyjL5BCSGHnK4idCGl9ARurQApLEQQNpAlB8ojhYA+OQ7krdar5lx1mZ37uBS9XeCneMQ8+wr6q8A2b4B38oFVFOMAXaqjjG89VhI/h0o73Fq9VhKnTKVfMCrPi0i4civjEOPgU60sOffziKTdbYBl8iAMerp2YRLb0ggk+oqhuzJtlGROccYxW07x/6JUJM6SL2f81ItIN4h8D9BJl8Bnr9QAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

RightBubble.propTypes = {
  message: PropTypes.string,
};

export default RightBubble;
