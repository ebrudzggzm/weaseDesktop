import React, { useEffect, useState } from "react";
import GeneralButton from "../dynamicComponents/buttons/GeneralButton";
import Clock from "../dynamicComponents/clock/Clock";
import DefaultIcon from "../dynamicComponents/Icons/DefaultIcon";
import Logout from "../coreComponents/logout/Logout";
import { LogoutShowSelectedStore } from "../../stateManagement/atom";
import { useRecoilState } from "recoil";
import whatsappIcon from "../../images/whatsappIcon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import envelopIcon from "../../images/envelop.png";
import person from "../../images/person.png";
import clock from "../../images/clock.png";
import frame from "../../images/frame.png";
import lens from "../../images/lens.png";
import backArrow from "../../images/backArrow.png";

//JWT-DECODE
import jwt_decode from "jwt-decode";

//Images
import userImage from "../../images/landingppnew2.png";
import usersWorker from "../../worklayer/usersWorker";

const HorizontalNav = React.memo(() => {
  //State
  const [show, setShow] = useState(false);
  const [btnArray, setBtnArray] = useState([]);
  const [userPicture, setUserPicture] = useState("");

  //State Management
  const [showLogOut, setShowLogout] = useRecoilState(LogoutShowSelectedStore);

  // useEffect(() => {
  //   let buttons = document.querySelectorAll(".horizontalNavButton");
  //   setBtnArray(Array.from(buttons));

  //   const userInfo = localStorage.getItem("wease.token");
  //   var decoded = jwt_decode(userInfo);

  //   usersWorker
  //     .users(
  //       decoded[
  //         "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
  //       ]
  //     )
  //     .then((res) => {
  //       setUserPicture(res.data.profilePicture);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    setShowLogout({ show: show, setShow: setShow });
  }, [show]);

  const handleHorizontalNavButton = (e) => {
    btnArray.map((param, key) => {
      if (
        e.target === param ||
        e.target.parentNode.parentNode === param ||
        e.target.parentElement === param
      ) {
        param.style.backgroundColor = "#2ea8b7";
      } else {
        param.style.backgroundColor = "#e6e9ed";
      }
    });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <nav className="row LayoutHorizontalNavbar">
        <div className="HorizontalNavlogo ms-5 col-md-2"></div>
        <div className="HorizontalNavNotifications col-md-6">
          {/* <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-upload"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          /> */}
          {/* <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
              <div className="horizontalButtonNumber">5</div>
                <DefaultIcon
                  className="bi bi-person-add"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                
              </>
            }
          /> */}
          <GeneralButton
           className="horizontalNavButton"
           onClick={handleHorizontalNavButton}
           text={
             <>
             <div className="horizontalButtonNumber">5</div>      
              <img src={person} alt="person" style={{ width: '40%', height: 'auto' , }}/>                               
             </>
           }
          />
          {/* <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-whatsapp"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          /> */}
          {/* <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-telegram"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          /> */}
          {/* <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-facebook"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          />
          <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-instagram"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          />
          <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
                <DefaultIcon
                  className="bi bi-twitter"
                  iconStyles={{
                    color: "black",
                    fontSize: "18px",
                    marginRight: ".5rem",
                  }}
                />
                <div className="horizontalButtonNumber">5</div>
              </>
            }
          /> */}
            <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
              <div className="horizontalButtonNumber">5</div>      
               <img src={whatsappIcon} alt="whatsappIcon" style={{ width: '40%', height: 'auto' , }}/>                               
              </>
            }
          />
            <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
              <div className="horizontalButtonNumber">5</div>
              <img src={envelopIcon} alt="envelopIcon" style={{ width: '40%', height: 'auto',}}/>   
              
                          
              </>
            }
          />
          <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
              <div className="horizontalButtonNumber">5</div>
              <img src={clock} alt="clock" style={{ width: '40%', height: 'auto',}}/>      
              </>
            }
          />
          <GeneralButton
            className="horizontalNavButton"
            onClick={handleHorizontalNavButton}
            text={
              <>
              <div className="horizontalButtonNumber">5</div>
              <img src={frame} alt="frame" style={{ width: '40%', height: 'auto',}}/>  
              </>
            }
          />
        </div>
        <div className="HorizontalNavUser col-md-3">
          {/* <div className="HorizontalNavPerformance">
            <span className="HorizontalNavPerformanceText">My Performance</span>
            <span className="HorizontalNavPerformanceCount">90.00 %</span>
          </div> */}
          <img src={backArrow} alt="backArrow" style={{ width:'37px',height:'36px',marginRight:'8px' }}/> 
          <img src={lens} alt="lens" style={{ width:'37px',height:'36px',marginRight:'8px' }}/> 
          <div className="HorizontalNavTime">
            <Clock />
          </div>
          <div
            style={{
              width: "2.7rem",
              height: "2.7rem",
              marginTop: "5px",
              borderRadius: "50%",
              backgroundImage: `url(${userImage /*userPicture*/})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              cursor: "pointer",
            }}
            className="HorizontalNavUserImage"
            onClick={handleShow}
          >
            <div className="HorizontalNavUserLoginIcon"></div>
          </div>
        </div>
      </nav>
      {/* {show && <Logout setShow={setShow} />} */}
    </React.Fragment>
  );
});

export default HorizontalNav;
