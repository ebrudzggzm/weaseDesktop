import React, { useEffect } from "react";
import DefaultIcon from "../dynamicComponents/Icons/DefaultIcon";
import DropDownModal from "../dynamicComponents/modals/DropDownModal";
import MessageReminder from "../dynamicComponents/messageReminder/MessageReminder";
import CompanyChats from "../dynamicComponents/companyChats/CompanyChats";
import Inputs from "../dynamicComponents/Inputs/Inputs";
import Excel from "./excel/Excel";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CompanyColorsSelectedStore,
  LeadColorsSelectedStore,
  LeadsMessageReminderSelectedStore,
} from "../../stateManagement/atom";
import { LeadsCompanyChatsSelectedStore } from "../../stateManagement/atom";
import { LeadsDetailsShowSelectedStore } from "../../stateManagement/atom";
import { AgentTargetSelectedStore } from "../../stateManagement/atom";

//Images
import userImage from "../../images/user.jpg";
import FilterSettings from "./filterSettings/FilterSettings";

const Leads = () => {
  //State
  const [leadsDrop, setLeadsDrop] = useState(false);
  const [companyDrop, setCompanyDrop] = useState(false);
  const [reminderCounts, setReminderCounts] = useState(50);
  const [companyCounts, setCompanyCounts] = useState(50);
  const [searchLeadsInput, setSearchLeadsInput] = useState(false);
  const [excelLeadsInput, setExcelLeadsInput] = useState(false);
  const [filterSettingsLeadsInput, setFilterSettingsLeadsInput] =
    useState(false);

  //State Management
  const [msgReminderStore, setMsgReminderStore] = useRecoilState(
    LeadsMessageReminderSelectedStore
  );

  const [companyChatsStore, setCompanyChatsStore] = useRecoilState(
    LeadsCompanyChatsSelectedStore
  );

  const [leadDetailsShowStore, setLeadDetailsShowStore] = useRecoilState(
    LeadsDetailsShowSelectedStore
  );

  const [verticalNavAgentTargetParameter, setVerticalNavAgentTargetParameter] =
    useRecoilState(AgentTargetSelectedStore);

  const leadColor = useRecoilValue(LeadColorsSelectedStore);
  const companyColor = useRecoilValue(CompanyColorsSelectedStore);

  //Custom Styles
  const iconsStyle = {
    marginLeft: "1rem",
    marginRight: ".5rem",
    cursor: "pointer",
    color: "white",
  };

  //Event Handlers
  const openLeadsDropDownMenu = () => {
    setLeadsDrop(!leadsDrop);
    setCompanyDrop(false);
  };

  const openCompanyDropDownMenu = () => {
    setCompanyDrop(!companyDrop);
    setLeadsDrop(false);
  };

  // Reminder Icons
  const reminderIcons = () => {
    return new Array(
      "bi bi-person-add",
      "bi bi-whatsapp",
      "bi bi-telegram",
      "bi bi-facebook",
      "bi bi-instagram",
      "bi bi-alarm"
    ).map((icon, key) => {
      return (
        <DefaultIcon
          key={key}
          iconStyles={{ color: "#1c2b41" }}
          layoutStyles={{ width: "33.3%", marginLeft: "2.5px" }}
          className={icon}
        />
      );
    });
  };

  //Search Open/Close Icon
  const handleToggle = (e) => {
    if (String(e.target.className) === "bi bi-search") {
      setSearchLeadsInput(!searchLeadsInput);
      setExcelLeadsInput(false);
      setFilterSettingsLeadsInput(false);
    }

    if (String(e.target.className) === "bi bi-list") {
      setFilterSettingsLeadsInput(!filterSettingsLeadsInput);
      setExcelLeadsInput(false);
      setSearchLeadsInput(false);
    }

    if (String(e.target.className) === "bi bi-upload") {
      setExcelLeadsInput(!excelLeadsInput);
      setFilterSettingsLeadsInput(false);
      setSearchLeadsInput(false);
    }
  };

  //Handle Leads Filter
  // Filter will be in data coming from Redux
  const handleFilterChange = (e) => {
    console.log(e.target.value);
  };

  //MessageReminder Handle
  const handleMessageReminder = (e, key) => {
    setLeadDetailsShowStore(true);
    setVerticalNavAgentTargetParameter("");
    const allMsgReminder = document.querySelectorAll(".MessageReminderLayout");

    allMsgReminder[key].style.backgroundColor = "#ddede5";

    // non-select msg reminder color
    const nonSelectAllMsgReminder = Array.from(allMsgReminder);

    nonSelectAllMsgReminder.filter((param) => {
      if (nonSelectAllMsgReminder.indexOf(param) !== key) {
        param.style.backgroundColor = "";
      }
    });

    const selectedLeadsUserName =
      allMsgReminder[key].children[1].children[0].textContent;

    const selectedLeadsUserLastMessage =
      allMsgReminder[key].children[1].children[1].textContent;

    //Send selected msgReminder to global state
    setMsgReminderStore({
      selectedLeadsUserName,
      selectedLeadsUserLastMessage,
    });
  };

  //CompanyChats Handle
  const handleCompanyChats = (e, key) => {
    const allCompanyChats = document.querySelectorAll(".CompanyChatsLayout");
    setVerticalNavAgentTargetParameter("");
    allCompanyChats[key].style.backgroundColor = "#ddede5";

    // non-select company chats color
    const nonSelectCompanyChats = Array.from(allCompanyChats);

    nonSelectCompanyChats.filter((param) => {
      if (nonSelectCompanyChats.indexOf(param) !== key) {
        param.style.backgroundColor = "";
      }
    });

    const selectedCompanyChatsUser =
      allCompanyChats[key].children[1].children[0].textContent;

    const selectedCompanyChatsUserLastMessage =
      allCompanyChats[key].children[1].children[1].textContent;

    setCompanyChatsStore({
      selectedCompanyChatsUser,
      selectedCompanyChatsUserLastMessage,
    });
  };

  /************************** LEAD - COMPANY COLOR HEADER CHANGED *****************************/
  const [selectedLeadColor, setSelectedLeadColor] = useState("");
  const [selectedCompanyColor, setSelectedCompanyColor] = useState("");

  useEffect(() => {
    setSelectedLeadColor(leadColor);
  }, [leadColor]);

  useEffect(() => {
    setSelectedCompanyColor(companyColor);
  }, [companyColor]);

  /***********************************************************************************/

  return (
    <>
      <div
        style={{ backgroundColor: selectedLeadColor }}
        className="LeadsAccordion"
      >
        <div onClick={openLeadsDropDownMenu} className="LeadsAccordionStarter">
          {leadsDrop === false ? (
            <img
              style={iconsStyle}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nGMwsHaON7BxfGlg7VhhYWHByYALGNg4TjGwcfoPxtZOj/VtHNNCQ0OZ8SuEa3A8Z2jj4ExYIRTr2zju1rd21CaoEKLY6ZeBjVMIdRQStpqgZ/AGj7VjHDEBDgBd2WiM9YQJLgAAAABJRU5ErkJggg=="
            />
          ) : (
            <img
              style={iconsStyle}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAtUlEQVQYlX2PPQ4BURRGz32oNCqJRiyBlgzFLEAkehvQiIhWrSHWwAaoFBMFCgUvdjCRaLUiZK5CJBM/73bfl5Pz5Uqx4rcQyjhOiLZJRIdA1gUqUjeojl3Qy8jYZFI6Ak4O7myu6UkiDMNHLl+4gDT+2NqH3XJvAOymNgX2P7ij3VRnAOaVB5GI9r9sol0YRDEQ7HoVCCxim3O7XgXvaOIGE9EBbsBdVXqOB6Hk+c2S5zc/+ycUSzLEseUdEwAAAABJRU5ErkJggg=="
            />
          )}
          <span style={{ fontSize: "22px" }}>Leads</span>
          <span className="LeadsAccordionCount">
            <b>{reminderCounts}</b>
          </span>
        </div>
        <div className="LeadsAccordionFilter">
          {new Array("bi bi-search", "bi bi-list", "bi bi-upload").map(
            (el, key) => {
              return (
                <DefaultIcon
                  key={key}
                  layoutStyles={{
                    marginRight: "1rem",
                    cursor: "pointer",
                    color: key === 0 && searchLeadsInput ? "white" : "",
                  }}
                  iconStyles={{ fontSize: "20px", color: "black" }}
                  className={el}
                  onClick={handleToggle}
                />
              );
            }
          )}
        </div>
      </div>
      {searchLeadsInput && (
        <Inputs
          layoutClassName="LeadsSearchInputLayout"
          inputClassName="LeadsSearchInput"
          iconFormat="bi bi-search"
          inputLayoutClassName="LeadsSearchInputClass"
          placeholder="Search Leads ..."
          onChange={handleFilterChange}
        />
      )}
      {/* ************************* \\ CAUTION //****************************** */}
      {/* Excel and Filtersettings Components use same css properties and class */}
      {/* ***********************************************************************/}

      {excelLeadsInput && (
        <DropDownModal className="excelLeadsDropDown">
          <Excel setExcelLeadsInput={setExcelLeadsInput} />
        </DropDownModal>
      )}

      {filterSettingsLeadsInput && (
        <DropDownModal className="excelLeadsDropDown">
          <FilterSettings
            setFilterSettingsLeadsInput={setFilterSettingsLeadsInput}
          />
        </DropDownModal>
      )}
      {leadsDrop && (
        <DropDownModal className="LeadsDropDownModal">
          {/* {Array.from({ length: reminderCounts }).map((param, key) => {
            return ( */}
          <MessageReminder
            // key={key}
            user="Marcus Smith"
            userMessage="test message"
            timer="1 day 1 hours"
            icons={reminderIcons()}
            imgSrc={userImage}
            onClick={(e) => {
              handleMessageReminder(e, 0);
            }}
          />
          <MessageReminder
            // key={key}
            user="Hannah Layton "
            userMessage="test message"
            timer="1 day 1 hours"
            icons={reminderIcons()}
            imgSrc={userImage}
            onClick={(e) => {
              handleMessageReminder(e, 1);
            }}
          />
          <MessageReminder
            // key={key}
            user="Emma Anderson"
            userMessage="test message"
            timer="1 day 1 hours"
            icons={reminderIcons()}
            imgSrc={userImage}
            onClick={(e) => {
              handleMessageReminder(e, 2);
            }}
          />
          <MessageReminder
            // key={key}
            user="Ben Campell"
            userMessage="test message"
            timer="1 day 1 hours"
            icons={reminderIcons()}
            imgSrc={userImage}
            onClick={(e) => {
              handleMessageReminder(e, 3);
            }}
          />
          {/* );
          })} */}
        </DropDownModal>
      )}

      <div
        style={{ backgroundColor: selectedCompanyColor }}
        className="LeadsCompanyChatsAccordion"
      >
        <div
          onClick={openCompanyDropDownMenu}
          className="LeadsCompanyChatsAccordionStarter"
        >
          {companyDrop === false ? (
            <img
              style={iconsStyle}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nGMwsHaON7BxfGlg7VhhYWHByYALGNg4TjGwcfoPxtZOj/VtHNNCQ0OZ8SuEa3A8Z2jj4ExYIRTr2zju1rd21CaoEKLY6ZeBjVMIdRQStpqgZ/AGj7VjHDEBDgBd2WiM9YQJLgAAAABJRU5ErkJggg=="
            />
          ) : (
            <img
              style={iconsStyle}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAtUlEQVQYlX2PPQ4BURRGz32oNCqJRiyBlgzFLEAkehvQiIhWrSHWwAaoFBMFCgUvdjCRaLUiZK5CJBM/73bfl5Pz5Uqx4rcQyjhOiLZJRIdA1gUqUjeojl3Qy8jYZFI6Ak4O7myu6UkiDMNHLl+4gDT+2NqH3XJvAOymNgX2P7ij3VRnAOaVB5GI9r9sol0YRDEQ7HoVCCxim3O7XgXvaOIGE9EBbsBdVXqOB6Hk+c2S5zc/+ycUSzLEseUdEwAAAABJRU5ErkJggg=="
            />
          )}
          <span style={{ fontSize: "22px" }}>Company Chats</span>
          <span className="LeadsCompanyChatsAccordionCount">
            <b>{companyCounts}</b>
          </span>
        </div>
      </div>
      {companyDrop && (
        <div className="h-[100%] max-h-[550px]">
        <DropDownModal className="LeadsDropDownModal">
          {Array.from({ length: companyCounts }).map((param, key) => {
            return (
              <CompanyChats
                key={key}
                user="Company Users"
                imgSrc={userImage}
                userMessageCount="1"
                onClick={(e) => {
                  handleCompanyChats(e, key);
                }}
              />
            );
          })}
          </DropDownModal>
        </div>
      )}
    </>
  );
};

export default Leads;
