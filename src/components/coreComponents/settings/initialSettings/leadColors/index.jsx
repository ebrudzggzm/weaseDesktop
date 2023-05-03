import React, { useEffect, useState } from "react";
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";
import MessageReminder from "../../../../dynamicComponents/messageReminder/MessageReminder";
import Inputs from "../../../../dynamicComponents/Inputs/Inputs";
import companySettingsWorker from "../../../../../worklayer/companySettingsWorker";
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

//IMPORT İMAGES
import newLead from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-GREEN-1.png";
import level1 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-GREEN-2.png";
import level2 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-RED-1.png";
import level3 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-RED-2.png";
import level4 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-RED-3.png";
import level5 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-YELLOW-1.png";
import level6 from "../../../../../images/RESPONSE-TIME-PROFILE-TRACKING-YELLOW-2.png";

const LeadColors = ({ setInitialContent }) => {
  const [levels, setLevels] = useState({});
  const [updateLevels, setUpdateLevels] = useState({
    id: 1,
    companyId: 1,
    level1: null,
    level2: null,
    level3: null,
    level4: null,
    level5: null,
    level6: null,
  });

  //Return InitialContent Menu
  const returnAddEditMenu = () => {
    setInitialContent("initialSettings");
  };

  useEffect(() => {
    companySettingsWorker
      .getLeadDurationColor()
      .then((res) => {
        setLevels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateLevels]);

  const handleUpdateLeadColors = () => {
    companySettingsWorker
      .updateLeadDurationColor(updateLevels)
      .then((res) => {
        console.log(res);
        alertMessage({
          data: [{ data: "Lead Colors Updated" }],
        });
      })
      .catch((err) => {
        alertError({
          data: [{ error: "Lead Colors Not Updated" }],
        });
      });
  };

  return (
    <>
      <div className="row d-flex m-2 p-3 border-bottom ">
        <DefaultIcon
          layoutStyles={{
            width: "1rem",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={returnAddEditMenu}
          className="bi bi-arrow-left-circle"
        />
        <span className="addEditUserTitle">Lead Duration Colors</span>
      </div>
      <div className="row d-flex mt-4 leadReminder">
        <div className="leadColorsRow">
          <label style={{ marginRight: "-1rem" }} htmlFor="">
            New Lead
          </label>
          <img width={60} height={60} src={newLead} />
          <input
            defaultValue="0"
            className="leadColorsnputsClass"
            type="number"
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">1.Level</label>
          <img width={60} height={60} src={level1} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level1}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level1: e.target.value });
            }}
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">2.Level</label>
          <img width={60} height={60} src={level2} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level2}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level2: e.target.value });
            }}
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">3.Level</label>
          <img width={60} height={60} src={level3} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level3}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level3: e.target.value });
            }}
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">4.Level</label>
          <img width={60} height={60} src={level4} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level4}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level4: e.target.value });
            }}
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">5.Level</label>
          <img width={60} height={60} src={level5} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level5}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level5: e.target.value });
            }}
          />
        </div>
        <div className="leadColorsRow">
          <label htmlFor="">6.Level</label>
          <img width={60} height={60} src={level6} />
          <input
            className="leadColorsnputsClass"
            type="number"
            placeholder={levels.level6}
            onChange={(e) => {
              setUpdateLevels({ ...updateLevels, level6: e.target.value });
            }}
          />
        </div>
        <div
          style={{
            paddingBottom: "-3rem!important",
            height: "3rem",
            marginTop: "1rem",
          }}
        >
          &#9632; &nbsp; All inputs must be minute format
          <button
            style={{
              width: "5rem",

              border: "none",
              outline: "none",
              boxShadow: "0 0 3px black",
              borderRadius: "4px",
              marginLeft: "3rem",
            }}
            onClick={handleUpdateLeadColors}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default LeadColors;
