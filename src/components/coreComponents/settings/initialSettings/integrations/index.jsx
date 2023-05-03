import React, { useEffect, useState } from "react";
import companyMessagingChannelWorker from "../../../../../worklayer/companyMessagingChannelWorker";
import ActiveButton from "../../../../dynamicComponents/buttons/ActiveButton";
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";

//Alert Message
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

const Integrations = ({ setInitialContent }) => {
  //State
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [channels, setChannels] = useState([]);

  const [ID, setID] = useState();

  //Return InitialContent Menu
  const returnInitialSettingsMenu = () => {
    setInitialContent("initialSettings");
  };

  //Integrations
  const icons = [
    { icon: "bi bi-whatsapp" },
    { icon: "bi bi-facebook" },
    { icon: "bi bi-twitter" },
    { icon: "bi bi-instagram" },
    { icon: "bi bi-telegram" },
    { icon: "bi bi-newspaper" },
    { icon: "bi bi-envelope" },
    { icon: "bi bi-chat-dots-fill" },
  ];

  const activeRef = React.useRef([]);
  const activeCircle = React.useRef([]);

  useEffect(() => {
    companyMessagingChannelWorker
      .getCompanyMessaging()
      .then((res) => {
        console.log(res);
        setChannels(res.data.items);
      })
      .catch((err) => {
        alertError({
          data: [{ error: "Channels Not Listed " }],
        });
      });
  }, []);

  useEffect(() => {
    companyMessagingChannelWorker
      .updateIsActive(ID)
      .then((res) => {
        alertMessage({
          data: [{ data: "Channel Updated " }],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isActiveButton]);

  const iconChannels = channels.map((param) => {
    switch (param.channelName) {
      case "WhatsApp":
        param.icon = "bi bi-whatsapp";
        break;
      case "Facebook":
        param.icon = "bi bi-facebook";
        break;
      case "Twitter":
        param.icon = "bi bi-twitter";
        break;
      case "İnstagram":
        param.icon = "bi bi-instagram";
        break;
      case "Telegram":
        param.icon = "bi bi-telegram";
        break;

      default:
        break;
    }

    return param;
  });

  return (
    <>
      <div className="row d-flex m-2 border-bottom ">
        <DefaultIcon
          layoutStyles={{
            width: "1rem",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={returnInitialSettingsMenu}
          className="bi bi-arrow-left-circle"
        />
        <span className="addEditUserTitle">Integrations</span>
      </div>
      <div className="row">
        {Array.isArray(iconChannels) &&
          iconChannels.map((param, key) => {
            return (
              <div key={key} className="integrationItemLayout">
                <div className="item1">
                  <DefaultIcon className={param.icon} />
                  &nbsp;
                  {param.channelName}
                </div>
                <div
                  ref={(el) => (activeRef.current[key] = el)}
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={async (e) => {
                    await setID(param.id);

                    if (isActiveButton === false) {
                      activeRef.current[key].style.backgroundColor = "grey";
                      activeCircle.current[key].style.marginLeft = "0px";
                      await setIsActiveButton(!isActiveButton);
                    } else {
                      activeRef.current[key].style.backgroundColor = "#4a8869";
                      activeCircle.current[key].style.marginLeft = "1.5rem";
                      setIsActiveButton(false);
                    }
                    await setIsActiveButton(!isActiveButton);
                  }}
                  className="activeButtonLayout"
                >
                  <div
                    ref={(el) => (activeCircle.current[key] = el)}
                    className="activeButtonOnnOff"
                  ></div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Integrations;
