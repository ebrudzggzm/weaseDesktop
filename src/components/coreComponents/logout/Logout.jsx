import React, { useEffect } from "react";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";
import countryWorker from "../../../worklayer/countryWorker";
import { useState } from "react";

//JWT-DECODE
import jwt_decode from "jwt-decode";

//Images
import userImage from "../../../images/user.jpg";
import alertMessage from "../../../hooks/alertMessage";
import cityWorker from "../../../worklayer/cityWorker";
import translationWorker from "../../../worklayer/translation";
import usersWorker from "../../../worklayer/usersWorker";
import { endpoint } from "../../../utils/endpoints";

const Logout = React.memo(({ setShow }) => {
  //State
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [language, setLanguage] = useState();
  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");

  useEffect(() => {
    countryWorker
      .getCountryList()
      .then((res) => {
        setCountry(res.data.items);
      })
      .catch((err) => {
        alertMessage({
          data: [
            { country: "<h6 style='color:red'>country not listed</h6> " },
            { error: [err] },
          ],
        });
      });

    const userInfo = localStorage.getItem("wease.token");
    var decoded = jwt_decode(userInfo);
    console.log(decoded);
    setUserName(
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
    );

    usersWorker
      .users(
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      )
      .then((res) => {
        setUserPicture(res.data.profilePicture);
      })
      .catch((err) => {
        console.log(err);
      });

    translationWorker
      .getTranslatatorLanguage()
      .then((res) => {
        setLanguage(res.data.items);
      })
      .catch((err) => {
        alertMessage({
          data: [
            { language: "<h6 style='color:red'>language not listed</h6> " },
            { error: [err] },
          ],
        });
      });
  }, []);

  useEffect(() => {
    cityWorker
      .getCityListByCountryId()
      .then((res) => {
        setCity(res.data.items);
      })
      .catch((err) => {
        alertMessage({
          data: [
            { city: "<h6 style='color:red'>city not listed</h6> " },
            { error: [err] },
          ],
        });
      });
  }, [selectedCountry]);

  const handleSelectedCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  const exitLogout = () => {
    setShow(false);
  };

  const logoutApplication = () => {
    localStorage.removeItem("wease.token");
    window.location.reload();
  };
  console.log(endpoint + userPicture);
  return (
    <React.Fragment>
      <div className="logoutLayout">
        <div className="row p-1 header">
          <i
            style={{
              width: "3rem",
              fontSize: "1.5rem",
              marginLeft: ".5rem",
              cursor: "pointer",
            }}
            className="bi bi-x-lg"
            onClick={exitLogout}
          ></i>

          <img className="logoutUser" src={userImage} />
          <div style={{ width: "10rem", fontSize: "20px" }}>{userName}</div>
        </div>
        <div className="row mt-4">
          <GeneralButton
            onClick={logoutApplication}
            className="logoutButton"
            text="Logout"
          />
        </div>
        <div className="mt-5">
          <div className="logoutSalesManagerDetail">
            <div className="logoutSalesManagerDetailBanner">
              &nbsp;&nbsp;Sales Manager Details
            </div>
            <div className="logoutSalesManagerDetailContent">
              <div className="row mt-3">
                <div className="col-sm-4">Phone</div>
                <div className="col-sm-8">
                  <input
                    className="logoutSalesManagerDetailContentInput"
                    placeholder="phone"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">E-mail</div>
                <div className="col-sm-8">
                  <input
                    className="logoutSalesManagerDetailContentInput"
                    placeholder="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">Gender</div>
                <div className="col-sm-8">
                  <select
                    className="logoutSalesManagerDetailContentInput"
                    name="cars"
                    id="cars"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">Country</div>
                <div className="col-sm-8">
                  <select
                    className="logoutSalesManagerDetailContentInput"
                    name="cars"
                    id="cars"
                    onChange={handleSelectedCountry}
                  >
                    {Array.isArray(country) &&
                      country.map((param, key) => {
                        return (
                          <option key={key} value={param.name}>
                            {param.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">City</div>
                <div className="col-sm-8">
                  <select
                    className="logoutSalesManagerDetailContentInput"
                    name="cars"
                    id="cars"
                  >
                    {Array.isArray(city) &&
                      city.map((param, key) => {
                        return (
                          <option key={key} value={param.name}>
                            {param.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4">Language</div>
                <div className="col-sm-8">
                  <select
                    className="logoutSalesManagerDetailContentInput"
                    name="cars"
                    id="cars"
                  >
                    {Array.isArray(language) &&
                      language.map((param, key) => {
                        return (
                          <option key={key} value={param.langDescription}>
                            {param.langDescription}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="logoutSalesLoginInfo">
            <div className="logoutSalesManagerDetailBanner">
              &nbsp;&nbsp;<i className="bi bi-chevron-down"></i>&nbsp;Login Info
            </div>
            <div className="logoutLogInfoContent">
              <div className="row mt-3">
                <div className="col-sm-4">E-mail</div>
                <div className="col-sm-8">
                  <input
                    className="logoutSalesManagerDetailContentInput"
                    placeholder="email"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="logoutLogInfoContent">
              <div className="row mt-3">
                <div className="col-sm-4">Password</div>
                <div className="col-sm-8">
                  <input
                    className="logoutSalesManagerDetailContentInput"
                    placeholder="email"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

export default Logout;
