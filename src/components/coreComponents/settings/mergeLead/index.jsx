import React from "react";
import DefaultIcon from "../../../dynamicComponents/Icons/DefaultIcon";

const MergeLead = ({ setSettingsContent }) => {
  //Return Settings Menu
  const returnSettingsMenu = () => {
    setSettingsContent("SettingContent");
  };

  return (
    <div>
      <div className="row d-flex m-2 border-bottom ">
        <DefaultIcon
          layoutStyles={{
            width: "1rem",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={returnSettingsMenu}
          className="bi bi-arrow-left-circle"
        />
        <span className="initialTitle">Merge Lead</span>
      </div>
    </div>
  );
};

export default MergeLead;
