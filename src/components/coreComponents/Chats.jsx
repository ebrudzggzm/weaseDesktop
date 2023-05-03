import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

//State Management Import
import { useRecoilValue } from "recoil";
import { verticalNavState } from "../../stateManagement/atom";
import { verticalNavUpSideStateSelectedStore } from "../../stateManagement/atom";
import { LeadsDetailsShowSelectedStore } from "../../stateManagement/atom";
import { useRecoilState } from "recoil";
import { LogoutShowSelectedStore } from "../../stateManagement/atom";
import { AgentTargetSelectedStore } from "../../stateManagement/atom";

//Components Imports
import DefaultIcon from "../dynamicComponents/Icons/DefaultIcon";
import Settings from "./settings";
import HelpDesk from "./helpDesk";
import NotePad from "./notepad";
import Templates from "./templates";
import Calender from "./calender";
import AddUser from "./addUser";
import Reports from "./reports";
import Messager from "./messager/Messager";
import LeadDetails from "./leadDetails/LeadDetails";
import Logout from "./logout/Logout";

const TabModal = () => {
  //States

  const [modalInvisibility, setModalInvisibility] = useState("none");
  const [tabModalTitle, setTabModalTitle] = useState();
  const [verticalNavParameter, setVerticalNavParameter] =
    useRecoilState(verticalNavState);
  const [agentTargetClose, setAgentTargetClose] = useRecoilState(
    AgentTargetSelectedStore
  );

  //StateManagement Hook
  const verticalNav = useRecoilValue(verticalNavState);
  const agentTarget = useRecoilValue(AgentTargetSelectedStore);

  useEffect(() => {
    if (
      verticalNav !== "" &&
      verticalNav !== undefined &&
      verticalNav !== null &&
      verticalNav.length !== 0
    ) {
      setModalInvisibility("block");

      switch (verticalNav) {
        case "bi bi-sticky":
          return setTabModalTitle("Templates");
        case "bi bi-journal-richtext":
          return setTabModalTitle("NotePad");
        case "bi bi-gear":
          return setTabModalTitle("Settings");
        case "bi bi-question-circle":
          return setTabModalTitle("Help Desk");
        default:
          break;
      }
    }
  }, [verticalNav]);

  //Change TabModal Component For verticalNav
  const changeTabModalTemplate = () => {
    switch (verticalNav) {
      case "bi bi-sticky":
        return <Templates />;
      case "bi bi-journal-richtext":
        return <NotePad />;
      case "bi bi-gear":
        return <Settings />;
      case "bi bi-question-circle":
        return <HelpDesk />;
      default:
        break;
    }
  };

  //Close TabModal Component
  const closeModal = () => {
    setModalInvisibility("none");
    setVerticalNavParameter("");
    setAgentTargetClose("");
  };

  return (
    <div
      style={{
        width: agentTarget === "Agent Targets" ? "3000rem" : "70%",
        display: modalInvisibility,
      }}
      className="tabModalContainer"
    >
      <div
        style={{ width: agentTarget === "Agent Targets" ? "3000rem" : "100%" }}
        className="tabModalHeader"
      >
        <div className="tabModalClose">
          <DefaultIcon onClick={closeModal} className="bi bi-x-lg" />
        </div>
        <div className="tabModalTitle">
          {agentTarget === "Agent Targets" ? "" : tabModalTitle}
        </div>
      </div>
      <div className="tabModalContent">{changeTabModalTemplate()}</div>
    </div>
  );
};

const Chats = () => {
  const [leadDetailsShowStore, setLeadDetailsShowStore] = useRecoilState(
    LeadsDetailsShowSelectedStore
  );

  const [closeLeadDetails, setCloseLeadDetails] = useState(true);

  const showLeadsDetails = useRecoilValue(LeadsDetailsShowSelectedStore);
  const { show, setShow } = useRecoilValue(LogoutShowSelectedStore);
  const verticalUpSideIcon = useRecoilValue(
    verticalNavUpSideStateSelectedStore
  );

  useEffect(() => {
    if (closeLeadDetails == false) {
      setLeadDetailsShowStore(false);
    }
  }, [closeLeadDetails]);

  return (
    <>
        <div className="chatUserInfoLayout rounded-lg h-[100%] max-h-[650px] " >
          {verticalUpSideIcon === "bi bi-graph-up-arrow".trim() &&
          verticalNavState ? (
            <Iframe
              url="https://demo.bussion.com/#/share/72765664834877431233-162426/"
              width="100%"
              height="100%"
              id=""
              className=""
              display="block"
              position="relative"
            />
          ) : (
            <Messager />
          )}

          {showLeadsDetails != true ? (
            <TabModal />
          ) : (
            <LeadDetails
              closeLeadDetails={closeLeadDetails}
              setCloseLeadDetails={setCloseLeadDetails}
            />
          )}
          {show && <Logout setShow={setShow} />}



        



      
        
        </div>
    </>
  );
};

export default Chats;
