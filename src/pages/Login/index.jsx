import React, { useCallback, useState } from "react";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [componentVisibility, setComponentVisibility] = useState(() => {});

  const renderLoginPage = useCallback(
    (param = "welcome") => {
      if (String(param) === "welcome") {
        return <Welcome componentVisibility={setComponentVisibility} />;
      }

      if (String(param) === "forgotPassword") {
        return <ForgotPassword componentVisibility={setComponentVisibility} />;
      }

      if (String(param) === "signUp") {
        return <SignUp componentVisibility={setComponentVisibility} />;
      }
    },
    [componentVisibility]
  );

  const handleLoginClick = () => {
    window.location.pathname = "/";
  };

  return (
    <div className="loginPage">
      <div className="loginLogoSection">
        <img
          style={{ cursor: "pointer" }}
          onClick={handleLoginClick}
          className="loginLogo"
        />
      </div>
      {renderLoginPage(componentVisibility)}
    </div>
  );
};

export default React.memo(Login);
