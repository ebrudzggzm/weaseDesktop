import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  AgentTargetSelectedStore,
  LeadsMessageReminderSelectedStore,
} from "../../../stateManagement/atom";
import { LeadsCompanyChatsSelectedStore } from "../../../stateManagement/atom";

//Dynamıc Components
import MessageReminder from "../../dynamicComponents/messageReminder/MessageReminder";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";
// import Select from "react-select";

//Images
import userImage from "../../../images/landingppnew2.png";
// import whatsappImage from "../../../images/whatsapp_background.jpg";
// import facebookImage from "../../../images/facebook_background.jpg";
// import instagramImage from "../../../images/instagram_background.jpg";
// import telegramImage from "../../../images/telegram_background.jpg";
// import twitterImage from "../../../images/twitter_background.jpg";
import ScrollModal from "../../dynamicComponents/modals/ScrollModal";
import RightBubble from "../../dynamicComponents/rigthBubble/RightBubble";
import LeftBubble from "../../dynamicComponents/leftBubble/LeftBubble";

const Messager = () => {
  //States
  const [changeChatBg, setChangeChatBg] = useState();
  const [show, setShow] = useState(false);
  const [messageArr, setMessageArr] = useState([]);

  //StateManagement Hook
  const msgReminderSelected = useRecoilValue(LeadsMessageReminderSelectedStore);
  const companyChatsSelected = useRecoilValue(LeadsCompanyChatsSelectedStore);
  const agentTarget = useRecoilValue(AgentTargetSelectedStore);

  //Refs
  const messageContentFileInput = React.useRef();
  //Handle Multiple elements (in Array) reference
  const iconRef = React.useRef([]);

  //Whatsup Template Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(companyChatsSelected);
  // console.log(msgReminderSelected);
  const messagerHeaderIcons = [
    "bi bi-whatsapp",
    "bi bi-instagram",
    "bi bi-twitter",
    "bi bi-facebook",
    "bi bi-telegram",
    "bi bi-newspaper",
    "bi bi-envelope",
    "bi bi-chat-dots",
    "bi bi-book",
  ];

  // For icons hover effect
  const handleMouseEnter = (e) => {};

  const handleMouseLeave = (e) => {};

  const handleClick = (e) => {
    //Only Change Target Icon Color When Click Event Occured

    iconRef.current.filter((param) => {
      if (param.className !== e.target.className) {
        param.style.color = "black";
        param.style.backgroundColor = "#e6e9ed";
      }
    });

    iconRef.current.find((param) => {
      if (param.className === e.target.className) {
        param.style.color = "white";
        param.style.backgroundColor = "#dddddd";
      }
    });
    setChangeChatBg(e.target.className.trim());
  };

  const changeChatScreenBG = () => {
    switch (changeChatBg) {
      case "bi bi-whatsapp messagerIcons":
        return "#559D79"; //
      case "bi bi-instagram messagerIcons":
        return "#cfbdbc"; //
      case "bi bi-twitter messagerIcons":
        return "#56a9f7"; //
      case "bi bi-facebook messagerIcons":
        return "#6b9dff"; //
      case "bi bi-telegram messagerIcons":
        return "#2eafe1"; //
      case "bi bi-newspaper messagerIcons":
        return "#F1D895";
      case "bi bi-chat-dots messagerIcons":
        return;
      case "bi bi-envelope messagerIcons":
        return;
      case "bi bi-book messagerIcons":
        return;
      default:
        return "#CDD3DB";
    }
  };

  //Upload File
  const handleUploadFile = () => {
    messageContentFileInput.current.click();
  };

  const WhatsappTemplate = () => {
    return (
      <>
        <div className="row">
          <div className="row">
            <span>Templates</span>
          </div>
          {/* <div className="row mt-3">
            <Select
              menuPlacement="auto"
              menuPosition="fixed"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={[{ value: "open_in", label: "open_in" }]}
            />
          </div> */}
          <div className="row mt-3">
            <div
              style={{
                width: "100%",
                height: "6rem",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid grey",
              }}
            >
              Merhaba, sizinle telefon görüşmemiz üzerine iletişim kuruyorum.
              Size nasıl yardımcı olabilirim?
            </div>
          </div>
          <div className="row mt-3">
            <button
              style={{
                fontSize: "1.2rem",
                letterSpacing: "2px",
              }}
              className="btn btn-secondary"
            >
              Send
            </button>
          </div>
        </div>
      </>
    );
  };

  const messageRef = React.useRef();

  const sendMessage = () => {
    let messageValue = messageRef.current.value;

    if (messageValue !== "") {
      setMessageArr([...messageArr, <RightBubble message={messageValue} />]);
    }

    messageRef.current.value = "";
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: agentTarget === "Agent Targets" ? "none" : "block",
        }}
        className="messagerLayout  "
      >
        <div className="messagerHeader">
          <div className="col-sm-5">
            <div
              // onClick={onClick}
              // ref={msgRef}
              className="MessageReminderLayout"
            >
              <div className="MessageReminderScaler">
                <div
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    marginTop: "5px",
                    borderRadius: "50%",
                    backgroundImage: `url(${userImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="MessageReminderMessager2">
                <div className="MessageReminderUser">
                  {msgReminderSelected.selectedLeadsUserName ||
                    companyChatsSelected.selectedCompanyChatsUser}
                </div>
                <div className="MessageReminderUserMessage">
                  {msgReminderSelected.selectedLeadsUserLastMessage ||
                    companyChatsSelected.selectedCompanyChatsUserLastMessage}
                </div>
              </div>
              <div className="MessageReminderTimer2">
                <div className="MessageReminderTimerText"></div>
                <div className="MessageReminderTimerIcons"></div>
              </div>
            </div>
            {/* <MessageReminder
              imgSrc={userImage}
              type="chatHeader"
              user={
                msgReminderSelected.selectedLeadsUserName ||
                companyChatsSelected.selectedCompanyChatsUser
              }
              userMessage={
                msgReminderSelected.selectedLeadsUserLastMessage ||
                companyChatsSelected.selectedCompanyChatsUserLastMessage
              }
            /> */}
          </div>
          <div
            // style={{
            //   height: "160%",
            // }}
            className="col-sm-7 messagerHeaderButtonSection"
          >
            {Array.isArray(messagerHeaderIcons) &&
              messagerHeaderIcons.map((param, key) => {
                return (
                  <i
                    key={key}
                    ref={(element) => (iconRef.current[key] = element)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    className={String(param + " messagerIcons")}
                  ></i>
                );
              })}
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${changeChatScreenBG()}`,
          }}
          className="messagerContent"
        >
          {/* Messager Content */}

          <div className="messagerMessage mb-3">
            {/* <div
              style={{
                width: "10rem",
                height: "4rem",
                backgroundColor: "white",
              }}
            ></div> */}
            <LeftBubble
              message="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
            />

            <LeftBubble
              message="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
            />
            {messageArr.map((param, key) => {
              return <div key={key}>{param}</div>;
            })}
          </div>
          {/* Messager Footer */}
          <div className="messageContentFooter">
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid",
              }}
            >
              <input
                ref={messageRef}
                placeholder="Write a message ..."
                className="messagerContentInput"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.keyCode === 13) {
                    sendMessage();
                  }
                }}
                type="text"
              />
              <div className="messageContentFooterSendButton">
                <DefaultIcon onClick={sendMessage} className="bi bi-send" />
              </div>
            </div>

            {/* <div className="messageContentFooterFileButton">
              <DefaultIcon className="bi bi-chat-dots" onClick={handleShow} />
            </div> */}
            <div className="messageContentFooterFileButton">
              <DefaultIcon className="bi bi-mic" />
            </div>
            <div className="messageContentFooterFileButton">
              <input
                ref={messageContentFileInput}
                style={{ display: "none" }}
                type="file"
              />
              <DefaultIcon
                onClick={handleUploadFile}
                className="bi bi-sendbi bi-paperclip"
              />
            </div>
          </div>
          <ScrollModal
            handleClose={handleClose}
            show={show}
            data={<WhatsappTemplate />}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Messager;
