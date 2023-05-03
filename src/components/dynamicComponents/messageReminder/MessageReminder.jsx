import React from "react";
import PropTypes from "prop-types";

const MessageReminder = ({
  user,
  userMessage,
  timer,
  icons,
  imgSrc,
  msgRef,
  onClick,
}) => {
  return (
    <div onClick={onClick} ref={msgRef} className="MessageReminderLayout">
      <div className="MessageReminderScaler">
        <div
          style={{
            width: "2.7rem",
            height: "2.7rem",
            marginTop: "5px",
            borderRadius: "50%",
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="MessageReminderMessager">
        <div className="MessageReminderUser">
          <b>{user}</b>
        </div>
        <div className="MessageReminderUserMessage">{userMessage}</div>
      </div>
      <div className="MessageReminderTimer">
        <div className="MessageReminderTimerText">{timer}</div>
        <div className="MessageReminderTimerIcons">{icons}</div>
      </div>
    </div>
  );
};

MessageReminder.propTypes = {
  user: PropTypes.any,
  userMessage: PropTypes.any,
  timer: PropTypes.any,
  icons: PropTypes.any,
  imgSrc: PropTypes.string,
  onclick: PropTypes.func,
};

export default MessageReminder;
