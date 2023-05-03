import React, { useState, useEffect, useRef, useContext } from "react";
import GeneralButton from "../../components/dynamicComponents/buttons/GeneralButton";
import BackIcon from "../../components/dynamicComponents/Icons/BackIcon";
import Inputs from "../../components/dynamicComponents/Inputs/Inputs";
import useLoginInputValidation from "../../hooks/useLoginInputValidation";
import fetchService from "../../services/fetchService";
import alertMessage from "../../hooks/alertMessage";

const ForgotPassword = ({ componentVisibility }) => {
  //States
  const [toggle, setToggle] = useState("forgotPassword");
  const [email, setEmail] = useState();
  const [flag, setFlag] = useState(false);

  // Hooks
  const emailRef = useRef();

  //Validation
  const validation = useLoginInputValidation({
    Email: email !== undefined ? email : "",
  });

  //Validation control
  useEffect(() => {
    if (validation.includes(undefined) === true) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [validation]);

  //Send Data to Backend
  useEffect(() => {
    if (flag === true) {
      const payload = {
        email: email,
      };
      fetchService(payload)
        .then((res) => {})
        .catch((err) => console.log(err));
    }
  }, [flag]);

  useEffect(() => {
    componentVisibility(toggle);
  }, [toggle]);

  //handle payload
  const handleForgotPasswordForm = async () => {
    const email = emailRef.current.value;

    setEmail(email);

    alertMessage({
      data: [{ email: email }],
    });

    setFlag("");
  };

  return (
    <React.Fragment>
      <div className="forgotPasswordContainer">
        <BackIcon
          layoutStyles={{
            width: "100%",
            position: "relative",
            marginRight: "3rem",
            marginTop: "-2rem",
          }}
          iconStyles={{
            cursor: "pointer",
          }}
          onClick={() => setToggle("welcome")}
        />
        <div className="forgotPasswordTitle mb-3">Forgot Password</div>
        <div className="forgotPasswordInfoText">
          Enter your account's email address to receive a password change link.
        </div>
        <Inputs
          type="email"
          label="E-Mail"
          inputRef={emailRef}
          inputClassName="forgotPasswordFormInput form-control emailIco error"
          inputLayoutClassName="forgotPasswordWrapper mt-2 "
          placeholder="Enter your email"
          layoutClassName="forgotPasswordForm mt-3 "
          labelClassName="forgotPasswordLabel"
          iconFormat="bi bi-envelope"
        />
        <GeneralButton
          className="forgotPasswordLoginButton"
          onClick={handleForgotPasswordForm}
          text="Confirm"
        />
      </div>
    </React.Fragment>
  );
};

export default React.memo(ForgotPassword);
