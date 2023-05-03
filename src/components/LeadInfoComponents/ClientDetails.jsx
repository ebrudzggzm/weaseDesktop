import React from "react";
import { useState } from "react";

const ClientDetails = ({ setCloseLeadDetails, closeLeadDetails }) => {
  const [cliendDetailShow, setClientDetailShow] = useState("");

  // const handleCloseLeadDetails = () => {
  //   setCloseLeadDetails(!closeLeadDetails);
  // };

  const handleClientDetailShow = () => {
    setClientDetailShow(!cliendDetailShow);
  };

  return (
    <div className="form-container">
      <button className="leadDetailsButton" onClick={handleClientDetailShow}>
        Client Details
        {cliendDetailShow === true ? (
          <i className="bi bi-chevron-down"></i>
        ) : (
          <i className="bi bi-chevron-right"></i>
        )}
      </button>
      {cliendDetailShow && (
        <div className="leadDetailsClientDetails">
          <div className="mt-3 leadDetailsClientDetailsSection ">
            <label htmlFor="">Phone</label>
            &nbsp;
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",

                width: "14rem",
              }}
            >
              <input className="leadDetailsCountryNumberPhone" type="text" />
              <input
                className="leadDetailsNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Email</label>
            &nbsp;
            <input className="leadDetailsEmail" type="email" />
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Gender</label>
            &nbsp;
            <select className="leadDetailGender" name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Country</label>
            &nbsp;
            <select className="leadDetailCountry" name="country" id="country">
              <option value="male">Turkey</option>
              <option value="female">USA</option>
              <option value="male">America</option>
              <option value="female">France</option>
            </select>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">City</label>
            &nbsp;
            <select className="leadDetailCity" name="city" id="city">
              <option value="male">İstanbul</option>
              <option value="female">Ankara</option>
              <option value="male">İzmir</option>
              <option value="female">Denizli</option>
            </select>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Language</label>
            &nbsp;
            <select className="leadDetailLang" name="lang" id="lang">
              <option value="male">English</option>
              <option value="female">Turkish</option>
              <option value="male">France</option>
              <option value="female">Germany</option>
            </select>
          </div>
          <div className="mt-3 mb-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Reference</label>
            &nbsp;
            <select
              className="leadDetailReference"
              name="reference "
              id="reference"
            >
              <option value="male">Instagram Organic</option>
              <option value="female">Form-Ad Google</option>
              <option value="male">Form-Ad FB</option>
              <option value="female">Form-Ad IG</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDetails;
