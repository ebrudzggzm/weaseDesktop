import React, { useEffect, useState } from "react";
import companySettingsWorker from "../../../../worklayer/companySettingsWorker";
import DefaultIcon from "../../../dynamicComponents/Icons/DefaultIcon";
import Switch from "@mui/material/Switch";
import alertMessage from "../../../../hooks/alertMessage";
import alertError from "../../../../hooks/alertError";

const AutoAgent = ({ setSettingsContent }) => {
  //State
  const [autoAssing, setAutoAssing] = useState(
    localStorage.getItem("autoAssign")
  );

  //Return Settings Menu
  const returnSettingsMenu = () => {
    setSettingsContent("SettingContent");
  };

  useEffect(() => {
    let val = localStorage.getItem("autoAssign");
    if (val !== undefined && val !== null) {
      if (val === "false") {
        val = false;
      }
      if (val === "true") {
        val = true;
      }
      setAutoAssing(val);
    }
  }, []);

  const handleActiveButtonRotate = () => {
    companySettingsWorker
      .autoAssing()
      .then(async (res) => {
        await setAutoAssing(res.data.autoAssign);
        await localStorage.setItem("autoAssign", res.data.autoAssign);
        alertMessage({
          data: [{ data: "Auto Assign Updated " }],
        });
      })
      .catch((err) => {
        console.log(err);
        alertError({
          error: [{ error: "Auto Assign Not Updated " }],
        });
      });
  };

  return (
    <>
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
        <span className="initialTitle">Auto Agent Assigning Settings</span>
      </div>
      <div className="row mt-5">
        <span
          style={{
            width: "15rem",
          }}
        >
          Assign Agent Automatically
        </span>

        <Switch
          color="success"
          checked={autoAssing}
          onChange={handleActiveButtonRotate}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </>
  );
};

export default AutoAgent;
