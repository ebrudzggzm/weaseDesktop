import React, { useState, useCallback } from "react";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";

//Settings Component Import
import Translation from "./translation";
import AutoAgent from "./autoAgent";
import Chatbot from "./chatbot";
import InitialSettings from "./initialSettings";
import CustomizeWorkspace from "./customizeWorkspace";
import MergeLead from "./mergeLead";

const Settings = () => {
  const [settingsContent, setSettingsContent] = useState("SettingContent");

  const handleClick = (e) => {
    const uniqComponentName = e.target.innerText;
    setSettingsContent(uniqComponentName);
  };

  const SettingsMenu = () => {
    return (
      <div className="settingsContainer">
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-person"
            />
          }
          text="Initial Settings"
          className="settingButton"
          onClick={handleClick}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-pen"
            />
          }
          text="Customize WorkSpace"
          className="settingButton"
          onClick={handleClick}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-person-add"
            />
          }
          text="Auto Agent Assigning"
          className="settingButton"
          onClick={handleClick}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-translate"
            />
          }
          text="Translation Settings"
          className="settingButton"
          onClick={handleClick}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-chat-dots"
            />
          }
          text="ChatBot"
          className="settingButton"
          onClick={handleClick}
        />
        <GeneralButton
          icon={
            <DefaultIcon
              iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
              className="bi bi-sign-merge-right"
            />
          }
          text="Merge Lead"
          className="settingButton"
          onClick={handleClick}
        />
      </div>
    );
  };

  const renderSettingsMenu = useCallback(() => {
    switch (settingsContent.trim()) {
      case "Initial Settings":
        return <InitialSettings setSettingsContent={setSettingsContent} />;
      case "Customize WorkSpace":
        return <CustomizeWorkspace setSettingsContent={setSettingsContent} />;
      case "Auto Agent Assigning":
        return <AutoAgent setSettingsContent={setSettingsContent} />;
      case "Translation Settings":
        return <Translation setSettingsContent={setSettingsContent} />;
      case "ChatBot":
        return <Chatbot setSettingsContent={setSettingsContent} />;
      case "Merge Lead":
        return <MergeLead setSettingsContent={setSettingsContent} />;
      default:
        return <SettingsMenu />;
    }
  }, [settingsContent]);

  return <>{renderSettingsMenu()}</>;
};

export default Settings;
