import React, { useState } from "react";
import EasyTracking from "./EasyTracking";
import FastResponse from "./FastResponse";
import HomeColors from "./HomeColors";
import HomeFooter from "./HomeFooter/HomeFooter";
import HomeNavBar from "./HomeNavBar";
import Payment from "./Payment/Payment";
import Pricing from "./Pricing";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import DistanceSellingContact from "./DistanceSellingContact/DistanceSellingContact";
import SecurityOfData from "./SecurityOfData/SecurityOfData";
import RequestPresentation from "./RequestPresentation/index.jsx";
import About from "./About/About";
import TryForFree from "./TryForFree/TryForFree";

const HomePage = () => {
  const [tryForFree, setTryForFree] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [distanceSellingContact, setDistanceSellingContact] = useState(false);
  const [securityData, setSecurityData] = useState(false);
  const [about, setAbout] = useState(false);
  const [monthlyAnnual, setMonthlyAnnual] = useState("annual");

  return (
    <>
      <div className="HomePageBg ">
        <HomeNavBar />
        <div className="container">
          {paymentOpen === true ? (
            <Payment />
          ) : privacyPolicy === true ? (
            <PrivacyPolicy />
          ) : distanceSellingContact === true ? (
            <DistanceSellingContact />
          ) : securityData === true ? (
            <SecurityOfData />
          ) : about === true ? (
            <About />
          ) : tryForFree === true ? (
            <TryForFree />
          ) : (
            <>
              <RequestPresentation setTryForFree={setTryForFree} />
              <div className="row mt-5">
                <div
                  id="weease"
                  className="col-sm-5 mt-5 HomePageIllustration2BG"
                ></div>
                <div className="col-sm-7 HomePageWeEaseText mt-5">
                  <h1 style={{ color: "black", fontSize: "60px" }}>We ease</h1>
                  <h2
                    className="mt-4"
                    style={{ color: "black", marginLeft: "100px" }}
                  >
                    <i className="bi bi-arrow-right-short"></i> responding
                  </h2>
                  <h2
                    className="mt-4"
                    style={{ color: "black", marginLeft: "180px" }}
                  >
                    <i className="bi bi-arrow-right-short"></i> tracking
                  </h2>
                  <h2
                    className="mt-3"
                    style={{ color: "black", marginLeft: "350px" }}
                  >
                    <i className="bi bi-arrow-right-short"></i> accessing
                  </h2>
                </div>
              </div>
              <FastResponse />
              <EasyTracking />
              <div className="row mt-5">
                <h1 className="mt-5">All chats accessible</h1>
                <p style={{ fontSize: "2rem" }} className="mt-3">
                  Leads, colegues and teams: all chatting platforms are
                  one-click away.
                </p>
                <p style={{ fontSize: "23px" }} className="mt-3">
                  Access your lead’s chat and your personal chat along with your
                  teams.
                </p>
                <p style={{ fontSize: "23px" }} className="mt-3">
                  Change screens that you need in split seconds.
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-sm-5 darkblue mt-5  ms-5"></div>
                <div className="col-sm-5 darkblueb mt-5 ms-5"></div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6 mt-5 p-5">
                  <h2 className="mt-5">
                    Assistant profile just to import or add leads
                  </h2>
                  <p
                    className="mt-4"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    Assistant profiles can import or manually add leads, and
                    assign them to the agents. Lead’s profile picture will
                    change color depending on the waiting time to be assigned.
                  </p>
                </div>
                <div className="col-sm-6 mt-5 unassigned"></div>
              </div>
              <HomeColors />
              <div className="row mt-5">
                <div className="col-sm-6 mt-5">
                  <h2 className="mt-5">Let the workflow continue 24/7!</h2>
                  <p
                    className="mt-5"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    With Wease, independent of location and time, whether in the
                    cafe or on vacation you can take care of your customers any
                    time.
                  </p>
                  <p
                    className="mt-5"
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    You can monitor all processes and sales of your team both in
                    and out of the office. It's very easy to follow!
                  </p>
                </div>
                <div className="col-sm-6 mt-5 mobileillustration"></div>
              </div>
              <Pricing setPaymentOpen={setPaymentOpen} />
            </>
          )}
        </div>
        <HomeFooter
          setDistanceSellingContact={setDistanceSellingContact}
          setPrivacyPolicy={setPrivacyPolicy}
          setSecurityData={setSecurityData}
          setAbout={setAbout}
        />
      </div>
    </>
  );
};

export default HomePage;
