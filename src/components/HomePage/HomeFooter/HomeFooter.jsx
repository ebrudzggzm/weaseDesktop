import React from "react";

//Images
import budotek2 from "../../../images/budotek2.jpg";

const HomeFooter = ({
  setPrivacyPolicy,
  setDistanceSellingContact,
  setSecurityData,
  setAbout,
}) => {
  return (
    <>
      <footer className="mt-5">
        <div className="row mt-5">
          <div className="col-sm-4 mt-5">
            <nav className="nav foot mt-5">
              <a className="nav-link " href="#">
                WE EASE
              </a>
              <a className="nav-link" href="#">
                WHY US
              </a>
              <a className="nav-link" href="#">
                PRICING
              </a>
              <a className="nav-link disabled" href="#">
                CONTACT
              </a>
            </nav>
            <ul className="list-group footerList mt-5">
              <li className="list-group-item mt-5">
                <a
                  onClick={() => {
                    setPrivacyPolicy(true);
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="list-group-item">
                <a
                  onClick={() => {
                    setDistanceSellingContact(true);
                  }}
                >
                  Distance Selling Contract
                </a>
              </li>
              <li className="list-group-item">
                <a href="">Terms and Condition</a>
              </li>
              <li className="list-group-item">
                <a
                  onClick={() => {
                    setSecurityData(true);
                  }}
                >
                  Security Of Data
                </a>
              </li>
              <li className="list-group-item">
                <a href="">Terms of Service</a>
              </li>
              <li className="list-group-item">
                <a
                  onClick={() => {
                    setAbout(true);
                  }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-8 mt-5  footerLogoSection">
            <ul className="list-group mt-5 me-5">
              <li className="list-group-item">
                <div
                  id="footerlogo"
                  className="HorizontalNavlogo mt-3 col-md-2"
                ></div>
              </li>
              <li className="list-group-item">
                <button className="subscription">Subscription</button>
              </li>
              <li className="list-group-item">
                <button className="moreInfo">More Info</button>
              </li>
              <li className="list-group-item">
                <button className="chatUs">Chat with us</button>
              </li>
              <li className="list-group-item">
                <button className="sampleForm">Sample Form</button>
              </li>
            </ul>
            <div
              className=" me-5"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img width={55} height={55} src={budotek2} />
              <span>
                Boğaziçi Üniversitesi Teknoloji Geliştirme Bölgesi (BÜDOTEK)
              </span>
            </div>
            <div className="row me-5">
              <a
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginRight: "2rem",
                }}
                href="#"
              >
                info@wease.com
              </a>
            </div>
            <div className="logoBand"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
