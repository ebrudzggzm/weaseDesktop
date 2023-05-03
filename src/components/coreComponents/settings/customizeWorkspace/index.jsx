import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import {
  CompanyColorsSelectedStore,
  LeadColorsSelectedStore,
} from "../../../../stateManagement/atom";
import DefaultIcon from "../../../dynamicComponents/Icons/DefaultIcon";
import Inputs from "../../../dynamicComponents/Inputs/Inputs";

const CustomizeWorkspace = ({ setSettingsContent }) => {
  //State
  const [leadChatBackground, setLeadChatBackground] = useState(false);
  const [companyChatBackground, setCompanyChatBackground] = useState(false);

  const [leadColors, setLeadColors] = useRecoilState(LeadColorsSelectedStore);
  const [companyColors, setCompanyColors] = useRecoilState(
    CompanyColorsSelectedStore
  );
  //Return Settings Menu
  const returnSettingsMenu = () => {
    setSettingsContent("SettingContent");
  };

  const palette = [
    "rgb(129, 144, 165)",
    "rgb(151, 211, 219)",
    "rgb(245, 227, 179)",
    "rgb(247, 175, 165)",
    "rgb(167, 212, 189)",
  ];

  const leadChatOpt = [
    { value: "Default", label: "Default" },
    { value: "File", label: "File" },
  ];

  const CheckBoxColors = ({ color, id, onClick }) => {
    return (
      <>
        <div
          onClick={onClick}
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "15px",
            backgroundColor: color,
            border: "1px solid grey",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <span style={{ display: "block" }}> {id + 1}</span>
        </div>
      </>
    );
  };

  const handleLeadColor = (param) => {
    setLeadColors(param);
  };

  const handleCompanyColor = (param) => {
    setCompanyColors(param);
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
        <span className="initialTitle">Customize WorkSpaces</span>
      </div>
      <div className="row ">
        <span>Lead CheckBox Colors</span>
      </div>
      <div className="row mt-2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {Array.isArray(palette) &&
            palette.map((param, key) => {
              return (
                <CheckBoxColors
                  onClick={() => {
                    handleLeadColor(param);
                  }}
                  key={key}
                  id={key}
                  color={param}
                />
              );
            })}
        </div>
      </div>
      <div className="row mt-3 ">
        <span>Company CheckBox Colors</span>
      </div>
      <div className="row mt-2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {Array.isArray(palette) &&
            palette.map((param, key) => {
              return (
                <CheckBoxColors
                  onClick={() => {
                    handleCompanyColor(param);
                  }}
                  key={key}
                  id={key}
                  color={param}
                />
              );
            })}
        </div>
      </div>
      <div className="row mt-3 ">
        <span>NotePad ChaxBox Colors</span>
      </div>
      <div className="row mt-2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {Array.isArray(palette) &&
            palette.map((param, key) => {
              return <CheckBoxColors key={key} id={key} color={param} />;
            })}
        </div>
      </div>
      <div className=" mt-5">
        <span style={{ marginLeft: "1rem", width: "50%" }}>
          Lead Chat Background
        </span>
        <Select
          menuPlacement="auto"
          menuPosition="fixed"
          onChange={(e) => {
            if (e.value === "File") setLeadChatBackground(true);
            if (e.value === "Default") setLeadChatBackground(false);
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "80%",
              marginLeft: "1rem",
              marginTop: "1rem",
            }),
          }}
          options={leadChatOpt}
        />
        <input
          style={{ display: leadChatBackground === true ? "block" : "none" }}
          className="custom-file-input"
          type="file"
        />
      </div>
      <div className=" mt-2 mb-4">
        <span style={{ marginLeft: "1rem", width: "50%" }}>
          Company Chat Background
        </span>
        <Select
          menuPlacement="auto"
          menuPosition="fixed"
          onChange={(e) => {
            if (e.value === "File") setCompanyChatBackground(true);
            if (e.value === "Default") setCompanyChatBackground(false);
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "80%",
              marginLeft: "1rem",
              marginTop: "1rem",
            }),
          }}
          options={leadChatOpt}
        />
        <input
          style={{ display: companyChatBackground === true ? "block" : "none" }}
          className="custom-file-input"
          type="file"
        />
      </div>
    </>
  );
};

export default CustomizeWorkspace;
