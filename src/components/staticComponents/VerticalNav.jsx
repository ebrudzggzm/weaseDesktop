import DefaultIcon from "../dynamicComponents/Icons/DefaultIcon";
import { useRecoilState } from "recoil";
import { verticalNavState } from "../../stateManagement/atom";
import { verticalNavUpSideStateSelectedStore } from "../../stateManagement/atom";
import { AgentTargetSelectedStore } from "../../stateManagement/atom";
import 'bootstrap/dist/css/bootstrap.min.css';

import notifications from "../../images/notifications.png";
import graphic from "../../images/graphic.png";
import note from "../../images/note.png";
import help from "../../images/help.png";
import calendar from "../../images/calender.png";
import messages from "../../images/messages.png";
import settings from "../../images/settings.png";


const VerticalNav = ({setNotificationCard,notificationCard}) => {

  const rightBarTopIcons = [
    notifications,
    calendar,
    graphic,
  ];

  const rightBarBottomIcons = [
    messages,
    note,
    settings,
    help
  ]

  
  //States
  const [verticalNavParameter, setVerticalNavParameter] =
    useRecoilState(verticalNavState);

  const [verticalNavUpSideParameter, setVerticalNavUpSideParameter] =
    useRecoilState(verticalNavUpSideStateSelectedStore);

  const [verticalNavAgentTargetParameter, setVerticalNavAgentTargetParameter] =
    useRecoilState(AgentTargetSelectedStore);

  //Only Vertical Icons Styles
  const verticalIconsLayoutStyles = {
    marginBottom: "1rem",
    cursor: "pointer",
    transition: ".3s ease",
    padding: ".5rem",
    borderRadius: "8px",
  };

  const verticalIconsStyles = {
    color: "#404358",
    fontSize: "1.3rem",
    padding: ".31rem",
  };

  //Handle Icons Click Event
  const handleIconsClick = (e) => {
    setVerticalNavParameter(e.target.className);
    setVerticalNavUpSideParameter("");
    setVerticalNavAgentTargetParameter("");
  };

  const handleUpSideIconsClick = (e) => {
    setVerticalNavUpSideParameter(e.target.className);
    setVerticalNavAgentTargetParameter("");
  };

  // For icons hover effect
  const handleMouseEnter = (e) => {
    // e.target.style.borderLeft = "2px solid rgb(20, 206, 128)";
  };

  const handleMouseLeave = (e) => {
    // e.target.style.borderLeft = "none";
  };

  return (
    <>
      <div className="VerticalContainer text-3xl font-bold underline bg-white-500 " >
        <div className="VerticalSection1 w-8 flex grid place-items-center space-y-3">   
          {/* {new Array(
           <img  src={notifications} alt={`Image ${notifications}`}/>,
           
          ).map((el, notifications) => {
            return (
              <DefaultIcon
                key={notifications}
                className={el}
                onClick={handleUpSideIconsClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                layoutStyles={verticalIconsLayoutStyles}
                iconStyles={verticalIconsStyles}
              />
              
            );
          })} */
            <>
              <div className={notificationCard == true ? 'bg-gray-500 rounded' : null } onClick={() => {
                setNotificationCard(!notificationCard)
              }}>
                <img src={notifications} className="z-50" />
              </div>
            <img src={calendar} />
               <img src={graphic} />
           </>
          }
        </div>
        <div className="VerticalSection2 w-8 flex grid place-items-center space-y-3">
          {/* {new Array(
            "bi bi-sticky",
            "bi bi-journal-richtext",
            "bi bi-gear",
            "bi bi-question-circle"
          ).map((el, key) => {
            return (
              <DefaultIcon
                key={key}
                className={el}
                onClick={handleIconsClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                layoutStyles={verticalIconsLayoutStyles}
                iconStyles={verticalIconsStyles}
              />
            );
          })} */
            rightBarBottomIcons.map((item) => <img src={item} />)
          }

        </div>
      </div>
    </>
  );
};

export default VerticalNav;
