import React, { useCallback, useEffect, useState } from "react";
import GeneralButton from "../../../dynamicComponents/buttons/GeneralButton";
import DefaultIcon from "../../../dynamicComponents/Icons/DefaultIcon";

//Initial Components Import
import AddEditUser from "./addEditUser";
import AgentTargets from "./agentTargets";
import CrmIntegrations from "./crmIntegrations";
import Integrations from "./integrations";
import LeadColors from "./leadColors";
import LeadSources from "./leadSources";
import LeadVisibility from "./leadVisibility";
import ProductAndServices from "./productAndServices";

//State Management Import
import { useRecoilState } from "recoil";
import { AgentTargetSelectedStore } from "../../../../stateManagement/atom";

const InitialSettings = ({ setSettingsContent }) => {
  //States
  const [initialContent, setInitialContent] = useState(
    "initialsettingsContent"
  );

  const [verticalNavAgentTargetParameter, setVerticalNavAgentTargetParameter] =
    useRecoilState(AgentTargetSelectedStore);

  //Return Settings Menu
  const returnSettingsMenu = () => {
    setSettingsContent("SettingContent");
  };

  const handleClick = (e) => {
    const uniqComponentName = e.target.innerText;
    setInitialContent(uniqComponentName);
  };

  useEffect(() => {
    if (initialContent.trim() === "Agent Targets") {
      setVerticalNavAgentTargetParameter(initialContent.trim());
    }
  }, [initialContent]);

  const InitialSettingsMenu = () => {
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
          <span className="initialTitle">Initial Settings</span>
        </div>
        <div className="initialSettingsContainer">
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-person-plus"
              />
            }
            text="Add & Edit User"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-binoculars"
              />
            }
            text="Lead Visibility"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-tag"
              />
            }
            text="Product & Services"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-palette"
              />
            }
            text="Lead Duration Colors"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-arrows-move"
              />
            }
            text="Agent Targets"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-x-diamond"
              />
            }
            text="Lead Sources"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className="bi bi-collection"
              />
            }
            text="Integration"
            className="initialSettingButton"
            onClick={handleClick}
          />
          <GeneralButton
            icon={
              <img
                style={{ width: "1.4rem", height: "1.4rem" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAIAAADganh7AAAACXBIWXMAAC4jAAAuIwF4pT92AAAJ62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LjM5YWJhZjcsIDIwMjIvMDIvMjUtMjE6NTc6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDdkMzhhZDQtMGM3My0xZDQzLThiZjgtMDBjNGIwZTM1ZWIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZjQ1OTE2LWNkYmEtNDY0NS1iOWFhLTE4YzQ0YjFhYTllNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpzdG9jazo2MTY0ZTRkMS1jMDI5LTQyOTQtYTg2YS1kYmMyMTA1ZjhmNTAiIHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PSIyQjNERjE5QjBDNjc3ODgyNjJBMEQwRENFRDNCNkQ1OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHRpZmY6SW1hZ2VXaWR0aD0iMTAwMCIgdGlmZjpJbWFnZUxlbmd0aD0iMTAwMCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpZQ2JDclBvc2l0aW9uaW5nPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSIzMDAvMSIgdGlmZjpZUmVzb2x1dGlvbj0iMzAwLzEiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMzEiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMDAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAwMCIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTEtMDNUMTQ6Mjk6NTkrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTExLTAzVDE0OjQ4OjMzKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTExLTAzVDE0OjQ4OjMzKzAzOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjljNjI1YTMtODVlNS0wNDQxLWI3ZTgtZTUxN2UyMmUxMDU4IiBzdEV2dDp3aGVuPSIyMDIyLTExLTAzVDE0OjQ4OjMzKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZjQ1OTE2LWNkYmEtNDY0NS1iOWFhLTE4YzQ0YjFhYTllNSIgc3RFdnQ6d2hlbj0iMjAyMi0xMS0wM1QxNDo0ODozMyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOWM2MjVhMy04NWU1LTA0NDEtYjdlOC1lNTE3ZTIyZTEwNTgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnN0b2NrOjYxNjRlNGQxLWMwMjktNDI5NC1hODZhLWRiYzIxMDVmOGY1MCIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpzdG9jazo2MTY0ZTRkMS1jMDI5LTQyOTQtYTg2YS1kYmMyMTA1ZjhmNTAiLz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fMGwhAAABFhJREFUSMdj/P//PwMDw9+/f4EkMzMzAxLAFAQqBgoCRRgZGeGC/8AAWZAFl4lAwMTEhKwZq4lYVTIClQLtAYoiKwIKYuoEKoPoZ8ALgHqZMNX9+fMHbuLrt2/v3b//+es3iDJklUA7IF5EAyC9/1EB0EQg+eX7j5b2DmNzC2YWUPjw8gu4enjOX7QYWeXv37+BhiKLAK2BMFAMhSg6cf6ijIIiVq/ZObt8/P7jPzbwBwwgbEZI7EOiCxgJV2/e1tHWZvj7m4GRKTc/39PLS0hI6N7du+vXr1+9YjlQmaq2rrur64/v3xUV5D29vQ11dSB6geYg4hDucojjZRWVgIKiklJXbtxEc8vqDRsx3Z6VV4DpahTvr1i7HqL0MoaJENAzeSqPgGBIWFh8YqKKugZEcWR8ArqhwICAB7C3rx9QkU9AIKZxcDVvPnyEC5ZUVkHMnTRt+ldYWINSHjx0gUALGJoMDFNnzMQ0ERjXcHORgbmVDcRcUQmJngkTIapRvK+krAyUnjB5CkET/4IBkLF24yZePj54EBdXVKKHaVVdvZqGZmlV9X9SwMdPn+4+eFBZW6eqqiopLXP3wUMWuCUHjxz9/vOnprbOy5ev7tx/oKKosO/AgUsXLgBTCTCtSEhJ29nZiYkIf/36dd78+UCHC4uIxERFATXy8fICkZeX5+f3737+/MnwH+b94MgotLSyff+h8upaZBFuPv5T584jZ80LV65CY+/de7jgk6dPQYbGJCVD+AHBIRU1dRraoPR8/ur11s5OIMPQxLRvwkRdfQMgW11b+83796IiIhD1QeGREEOLyivghj54+Ijh1p27EE5dUws0Ev7/f/TiJZCRkp4BFE/JzQeyb9+9Bw2lYyeUlJQYGZngZRKoWGJlBRUl4ALw4aNHTAcPHgSFi6BQY201vOCSFRcDlbCsbEDy/q2bV69d6+vrBbKB+U1NRenF8+eiYmJOHl5AkYXLVmzYug2YPhzd3OXlFaCZfsKkyUBSTEoaXvbAozUjJw85TA2NTQ4dOw7RxsnBsWPPXh4+Pg5uHg4ubnZOzn2HjwgKCAClgC5l2H/oMETP4RMn0dJKUhrI++b2zgIiIIcvWrEKKPj8+XO4x+uaWyHs/JJSeMEEMhSYpuWUVYEcEXGJVevWnz1/vrq+wcXT+/3HjxXVNUDxtt7+VRs3AxlCoqLQDAMpy3//ghTeQPD+4ycUQ4GcG3fv8wmLoCWphavX1YMd4hUQBFTDxskFZLt6eX/++hWi4NKlS0BxcSkZSNDduweNybv37rEA+epKClcuX+7s6Ni9a+e7t29V1TWCgMDLY/mn9w4ODvp6uiC/L1o0Y9rUT+/enb94KSIi4tWrVzy8vEDxJcuXAT0LZLBzcDg5OwMZPDw8jMCYQat88APMWhJLNQVUhFlxogFgLgKqIabGhdqKLAHUDCkJMZsUmDXuP1iMwe0ACgIVo1e5KPUMqiCmwzFbLnBBAIG77dhf4crrAAAAAElFTkSuQmCC"
              />
            }
            text="CRM Integration"
            className="initialSettingButton"
            onClick={handleClick}
          />
        </div>
      </>
    );
  };

  const renderInitialSettingsMenu = useCallback(() => {
    switch (initialContent.trim()) {
      case "Add & Edit User":
        return <AddEditUser setInitialContent={setInitialContent} />;
      case "Lead Visibility":
        return <LeadVisibility setInitialContent={setInitialContent} />;
      case "Product & Services":
        return <ProductAndServices setInitialContent={setInitialContent} />;
      case "Lead Duration Colors":
        return <LeadColors setInitialContent={setInitialContent} />;
      case "Agent Targets":
        return <AgentTargets setInitialContent={setInitialContent} />;
      case "Lead Sources":
        return <LeadSources setInitialContent={setInitialContent} />;
      case "Integration":
        return <Integrations setInitialContent={setInitialContent} />;
      case "CRM Integration":
        return <CrmIntegrations setInitialContent={setInitialContent} />;
      default:
        return <InitialSettingsMenu />;
    }
  }, [initialContent]);

  return <>{renderInitialSettingsMenu()}</>;
};

export default InitialSettings;
