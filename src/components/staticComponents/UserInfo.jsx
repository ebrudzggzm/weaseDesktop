import React from "react";
import { useState } from "react";
import Select from "react-select";

//Images
import userImage from "../../images/user.jpg";
import GeneralButton from "../dynamicComponents/buttons/GeneralButton";
import { CloseButton } from "react-bootstrap";




const UserInfo = () => {
  //State
  const [showNewPass, setShowNewPass] = useState(false);
  const [logoutInfo, setLogoutInfo] = useState("");
 
 

  //Logout Application
  const logout = () => {
    setLogoutInfo("Session Will Be Ended After 3 Second");
    setTimeout(() => {
      localStorage.removeItem("wease.token");
      window.location.reload();
    }, 3000);
  };

  const countries = [
    { value: "Turkey", label: "Turkey" },
    { value: "Germany", label: "Germany" },
    { value: "England", label: "England" },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const city = [
    { value: "Istanbul", label: "Istanbul" },
    { value: "Ankara", label: "Ankara" },
  ];

  const language = [
    { value: "Turkish", label: "Turkish" },
    { value: "English", label: "English" },
  ];
 
   const close =() => {
    setShowNewPass();
    document.getElementsByClassName("paneltoggle")[0].style.display = "none";
    //alert("its closed");
   };


  return (   
    <React.Fragment>
    
      <div className="row" >
      <div className="CloseButton"><CloseButton onClick={close}/></div>
     
        <div className="col-sm-2 text-center ">
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
              cursor: "pointer",
            }}
            className="HorizontalNavUserImage"
          ></div>
        </div>
        <div className="col-sm-10 pt-2 text-left">
          <h4>Hamza Atmaca</h4>
          <h6 className="text-danger">
            {logoutInfo && (
              <>
                <i className="bi bi-exclamation-triangle-fill"></i> &nbsp;
              </>
            )}
            {logoutInfo}
          </h6>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6 text-center">
          <GeneralButton
            onClick={logout}
            className="userInfoLogoutButton"
            text="Logout"
          />
        </div>
        <div className="col-sm-6  text-center">
          <input
            className="userInfoUserStatus"
            type="text"
            value="Sales Manager"
            readOnly
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="row mt-2 border-bottom">
          <b>Login Info</b>
        </div>
        <div className="row mt-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-envelope-at-fill"></i> &nbsp; Email
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <br />
            <label htmlFor="exampleInputEmail1 mt-3">
              <i className="bi bi-key-fill"></i> &nbsp; Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
            <br />
            <button
              onClick={() => {
                setShowNewPass(!showNewPass);
              }}
              className="btn btn-primary mb-3"
            >
              Change Password
            </button>
            <br />
            {showNewPass && (
              <>
                <label htmlFor="exampleInputEmail1 mt-3">
                  <i className="bi bi-key-fill"></i> &nbsp; New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="New Password"
                />
                <br />
                <label htmlFor="exampleInputEmail1 mt-3">
                  <i className="bi bi-key-fill"></i> &nbsp; Password
                  Confirmation
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password Confirmation"
                />
                <button className="btn btn-info mt-2">Save New Password</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="row mt-2 border-bottom">
          <b>User Details</b>
        </div>
        <div className="row mt-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1 mt-3">
              <i className="bi bi-telephone-fill"></i> &nbsp; Phone
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Phone"
            />
            <br />
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-envelope-at-fill"></i> &nbsp; Email
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <br />
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-gender-ambiguous"></i> &nbsp; Gender
            </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={gender}
            />
            <br />
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-globe-americas"></i> &nbsp; Country
            </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={countries}
            />
            <br />
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-signpost-split-fill"></i> &nbsp; City
            </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={city}
            />
            <br />
            <label htmlFor="exampleInputEmail1">
              <i className="bi bi-translate"></i> &nbsp; Language
            </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={language}
            />
          </div>
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default UserInfo;
