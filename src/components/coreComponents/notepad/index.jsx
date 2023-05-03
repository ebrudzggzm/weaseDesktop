import React from "react";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";

const NotePad = () => {
  return (
    <>
      <div
        className="mt-5"
        style={{
          border: "1px solid #cdd3db",
          width: "90%",
          margin: "auto",
          borderRadius: "10px",

          height: "25rem",
        }}
      >
        <div className="row mt-3 mb-3">
          <span
            style={{
              width: "100%",
              height: "3rem",
              backgroundColor: "#e6e9ed",
              marginTop: "-1rem",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              paddingTop: ".5rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <DefaultIcon
              layoutStyles={{
                width: "1rem",
                marginRight: "1rem",
              }}
              iconStyles={{
                fontSize: "1rem",
                color: "grey",
                cursor: "pointer",
              }}
              className="bi bi-chevron-compact-down"
            />
            Self Notes
          </span>
        </div>
        <div className="row">
          <textarea className="notepadNote"></textarea>
          <DefaultIcon
            layoutStyles={{
              width: "2rem",
              position: "absolute",
              marginLeft: "17.3vw",
              marginTop: "4rem",
            }}
            iconStyles={{
              fontSize: "2rem",
              color: "grey",
              cursor: "pointer",
            }}
            className="bi bi-journal-text"
          />
        </div>
      </div>
    </>
  );
};

export default NotePad;
