import React, { useState, useEffect, useRef } from "react";
import GeneralButton from "../../components/dynamicComponents/buttons/GeneralButton";
import BackIcon from "../../components/dynamicComponents/Icons/BackIcon";
import Inputs from "../../components/dynamicComponents/Inputs/Inputs";
import ScrollModal from "../../components/dynamicComponents/modals/ScrollModal";
import useLoginInputValidation from "../../hooks/useLoginInputValidation";
import fetchService from "../../services/fetchService";
import alertMessage from "../../hooks/alertMessage";

const Signup = ({ componentVisibility }) => {
  //States
  const [toggle, setToggle] = useState("signUp");
  const [modaldata, setModalData] = useState({});
  const [show, setShow] = useState(false);
  const [passwordHide, setPassWordHide] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [radioButton, setRadioButton] = useState();
  const [radioButtonErrorText, setRadioButtonErrorText] = useState(false);
  const [flag, setFlag] = useState(false);

  // Hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const radioButtonRef = useRef();
  const validation = useLoginInputValidation(
    { Email: email !== undefined ? email : "" },
    { Password: password !== undefined ? password : "" },
    { FirstName: firstname !== undefined ? firstname : "" },
    { LastName: lastname !== undefined ? lastname : "" }
  );

  useEffect(() => {
    componentVisibility(toggle);
  }, [toggle]);

  //Validation control
  useEffect(() => {
    if (validation.includes(undefined) === true) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [validation]);

  //handle payload
  const handleSignUpForm = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const radiobutton = radioButtonRef?.current?.checked;

    setEmail(email);
    setPassword(password);
    setFirstName(firstname);
    setLastName(lastname);
    setRadioButton(radiobutton);

    alertMessage({
      data: [
        { email: email },
        { password: password },
        { firstname: firstname },
        { lastname: lastname },
      ],
    });

    setFlag("");
  };

  //Send Data to Backend
  useEffect(() => {
    if (flag === true) {
      if (radioButton !== true) {
        setRadioButtonErrorText(true);
      } else {
        const payload = {
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
        };

        fetchService(payload)
          .then((res) => {})
          .catch((err) => console.log(err));
      }
    }
  }, [flag]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Open Privacy Modal
  const getPrivacy = () => {
    setModalData({
      header: "Privacy Policy",
      content: "Privacy Policy",
      footer: "İnfotec Bilişim Ltd. Şti. ©All Rights Reserved.",
    });

    handleShow();
  };
  //Open Terms Modal
  const getTerms = () => {
    setModalData({
      header: "Terms & Conditions",
      content: "Terms & Conditions",
      footer: "İnfotec Bilişim Ltd. Şti. ©All Rights Reserved.",
    });

    handleShow();
  };

  return (
    <React.Fragment>
      <ScrollModal handleClose={handleClose} show={show} data={modaldata} />
      <div className="signUpContainer">
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
        <div className="signUpTitle mb-2 ">Welcome to Wease!</div>
        <Inputs
          type="text"
          label="First Name"
          inputRef={firstNameRef}
          inputClassName="signUpFormInput form-control emailIco error"
          inputLayoutClassName="singUpWrapper "
          placeholder="Enter your firstname"
          layoutClassName="singUpForm "
          labelClassName="singUpLabel"
          iconFormat="bi bi-person"
        />
        <Inputs
          type="text"
          label="Last Name"
          inputRef={lastNameRef}
          inputClassName="signUpFormInput form-control emailIco error"
          inputLayoutClassName="singUpWrapper "
          placeholder="Enter your lastname"
          layoutClassName="singUpForm "
          labelClassName="singUpLabel"
          iconFormat="bi bi-person"
        />
        <Inputs
          type="email"
          label="Email"
          inputRef={emailRef}
          inputClassName="signUpFormInput form-control emailIco error"
          inputLayoutClassName="singUpWrapper "
          placeholder="Enter your email"
          layoutClassName="singUpForm "
          labelClassName="singUpLabel"
          iconFormat="bi bi-envelope"
        />
        <Inputs
          type={passwordHide === true ? "password" : "text"}
          label="Password"
          inputRef={passwordRef}
          inputClassName="signUpFormInput form-control emailIco error"
          inputLayoutClassName="singUpWrapper "
          placeholder="Enter your password"
          layoutClassName="singUpForm "
          labelClassName="singUpLabel"
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
        <div className="signUpCheckBoxLayout">
          <Inputs
            inputRef={radioButtonRef}
            inputClassName="signUpCheckBoxInput"
            type="checkbox"
            onClick={(e) => {
              if (e.target.checked === true) {
                setRadioButtonErrorText(false);
              }
            }}
          />
          <span>
            I aggree with
            <a onClick={getTerms} className="signUpAgreePriva">
              Terms & Conditions
            </a>
            and
            <a onClick={getPrivacy} className="signUpAgreePriva">
              Privacy Policy
            </a>
            .
          </span>
        </div>
        {radioButtonErrorText === true ? (
          <span className="signUpRadioButtonErrorText">Click checkbox</span>
        ) : (
          ""
        )}
        <GeneralButton
          className="singUpLoginButton"
          onClick={handleSignUpForm}
          text="Sign Up"
        />
      </div>
    </React.Fragment>
  );
};

export default React.memo(Signup);
