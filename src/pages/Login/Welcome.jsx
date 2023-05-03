import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Inputs from "../../components/dynamicComponents/Inputs/Inputs";
import GeneralButton from "../../components/dynamicComponents/buttons/GeneralButton";
import useLoginInputValidation from "../../hooks/useLoginInputValidation";
import fetchService from "../../services/fetchService";
import alertMessage from "../../hooks/alertMessage";
import axios from "axios";

const Welcome = ({ componentVisibility }) => {
  //States
  const [toggle, setToggle] = useState("welcome");
  const [passwordHide, setPassWordHide] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [flag, setFlag] = useState();

  // Hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const validation = useLoginInputValidation(
    { Email: email !== undefined ? email : "" },
    { Password: password !== undefined ? password : "" }
  );

  //Change component visibility
  useEffect(() => {
    componentVisibility(toggle);
  }, [toggle]);

  //Validation control
  useEffect(() => {
    if (validation.includes(undefined) === false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [flag]);

  //handle payload
  const handleWelcomeForm = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setEmail(email);
    setPassword(password);

    setFlag("");
  };

  //Send Data to Backend
  useEffect(() => {
    if (flag === true) {
      const payload = {
        email: email,
        password: password,
      };

      fetchService("Auth/Login", "POST", payload)
        .then((res) => {
          localStorage.setItem("wease.token", res.data.accessToken.token);
          window.location.pathname = "/weasepanel";
        })
        .catch((err) => {
          console.log(err);
          alertMessage({
            data: [{ err: "User Not Exists" }],
          });
        });
    }
  }, [flag]);

  return (
    <React.Fragment>
      <div className="welcomeContainer">
        <div className="welcomeFormContainer">
          <h5 className="welcomeTitle mb-2">Welcome!</h5>
          <div className="welcomeForm">
            <Inputs
              type="email"
              inputRef={emailRef}
              label="E-Mail"
              inputClassName="welcomeFormInput form-control emailIco error"
              inputLayoutClassName="welcomeInputWrapper "
              placeholder="Enter your email"
              layoutClassName="mb-2 position-relative "
              labelClassName="welcomeLabel form-label"
              iconFormat="bi bi-envelope"
            />
            <Inputs
              type={passwordHide === true ? "password" : "text"}
              inputRef={passwordRef}
              label="Password"
              inputClassName="welcomeFormInput form-control emailIco error"
              inputLayoutClassName="welcomeInputWrapper "
              placeholder="Enter your password"
              layoutClassName="mb-2 position-relative "
              labelClassName="welcomeLabel form-label"
              iconFormat="bi bi-lock"
              extras={
                <i
                  onClick={() => {
                    setPassWordHide(!passwordHide);
                  }}
                  className="welcomeShowPassword bi bi-eye-fill"
                ></i>
              }
            />
            <div className="welcomeSignForgot mt-1">
              <div className="welcomeForgot mb-2 text-right">
                <a
                  role="button"
                  onClick={() => setToggle("forgotPassword")}
                  className="forgotPass"
                >
                  Forgot password ?
                </a>
              </div>
              <div className="d-block">
                <GeneralButton
                  className="welcomeLoginButton"
                  onClick={handleWelcomeForm}
                  text="Sign In"
                />
              </div>
            </div>
          </div>
          <div className="registerBottom"></div>
        </div>
        <span className="mt-2">Don't have an account?</span>
        <a role="button" className="mt-1" onClick={() => setToggle("signUp")}>
          Sign up now.
        </a>
      </div>
    </React.Fragment>
  );
};

Welcome.propTypes = {
  componentVisibility: PropTypes.func,
};

export default React.memo(Welcome);
