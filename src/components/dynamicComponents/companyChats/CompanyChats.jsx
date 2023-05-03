import React from "react";
import PropTypes from "prop-types";

const CompanyChats = ({
  imgSrc,
  user,
  userMessageCount,
  onClick,
  companyRef,
}) => {
  return (
    <div ref={companyRef} onClick={onClick} className="CompanyChatsLayout">
      <div className="CompanyChatsUserImg">
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

      <div className="CompanyChatsMessager">
        <div className="CompanyChatsUser">{user}</div>
        <div className="CompanyChatsUserMessageCount">{userMessageCount}</div>
      </div>
    </div>
  );
};

CompanyChats.propTypes = {
  user: PropTypes.string,
  userMessageCount: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default CompanyChats;
