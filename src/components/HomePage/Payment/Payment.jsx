import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import Multistep from "react-multistep";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import UserInfo from "../UserInfo/UserInfo";

import { PaymentSelectedStore } from "../../../stateManagement/atom";
import { MontlyAnnualSelectedStore } from "../../../stateManagement/atom";

//Components
import Basic from "../Basic/Basic";
import Standart from "../Standart/Standart";
import Professional from "../Professional/Professional";
import Business from "../Business/Business";
import MonthlyAnnual from "../MonthlyAnnual/MonthlyAnnual";

const LastPayment = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">Card No</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastName">Iban No</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>

            <div className="form-group mt-2 mb-2">
              <label htmlFor="identification">CCV</label>
              <input
                type="number"
                className="form-control"
                id="identification"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Pay
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const Payment = () => {
  const [price, setPrice] = useState(0);

  const SOCIALMEDIA_INT = {
    basic: 139,
    standart: 189,
    business: 299,
    professional: 849,
  };

  const USER_COUNTS = {
    basic: 1,
    standart: 6,
    business: 21,
    professional: 51,
  };

  //StateManagement Hook
  const paymentType = useRecoilValue(PaymentSelectedStore);
  const monthlyAnnual = useRecoilValue(MontlyAnnualSelectedStore);

  const [M_A_PRICES, setM_A_PRICES] = useState({
    basic: monthlyAnnual === "monthly" ? 39.9 : 30.9,
    standart: monthlyAnnual === "monthly" ? 35.9 : 38.9,
    business: monthlyAnnual === "monthly" ? 32.9 : 26.9,
    professional: monthlyAnnual === "monthly" ? 30.9 : 24.9,
  });

  useEffect(() => {
    setM_A_PRICES({
      basic: monthlyAnnual === "monthly" ? 39.9 : 30.9,
      standart: monthlyAnnual === "monthly" ? 35.9 : 38.9,
      business: monthlyAnnual === "monthly" ? 32.9 : 26.9,
      professional: monthlyAnnual === "monthly" ? 30.9 : 24.9,
    });

    switch (paymentType) {
      case "basic":
        return setPrice(
          USER_COUNTS.basic * M_A_PRICES.basic + SOCIALMEDIA_INT.basic
        );
      case "standart":
        return setPrice(
          USER_COUNTS.standart * M_A_PRICES.standart + SOCIALMEDIA_INT.standart
        );
      case "business":
        return setPrice(
          USER_COUNTS.business * M_A_PRICES.business + SOCIALMEDIA_INT.business
        );
      case "professional":
        return setPrice(
          USER_COUNTS.professional * M_A_PRICES.professional +
            SOCIALMEDIA_INT.professional
        );
      default:
        return 0;
    }
  }, [monthlyAnnual]);

  const paymentTemplate = () => {
    switch (paymentType) {
      case "basic":
        return <Basic setPaymentOpen={() => {}} />;
      case "business":
        return <Business setPaymentOpen={() => {}} />;
      case "professional":
        return <Professional setPaymentOpen={() => {}} />;
      case "standart":
        return <Standart setPaymentOpen={() => {}} />;
      default:
        break;
    }
  };

  const steps = [
    { title: "Company Info", component: <CompanyInfo /> },
    { title: "User Info", component: <UserInfo /> },
    { title: "Payment", component: <LastPayment /> },
  ];

  const countVal = useCallback(() => {
    switch (paymentType) {
      case "basic":
        return USER_COUNTS.basic;
      case "standart":
        return USER_COUNTS.standart;
      case "business":
        return USER_COUNTS.business;
      case "professional":
        return USER_COUNTS.professional;
      default:
        return 0;
    }
  }, [monthlyAnnual]);

  const handleUsersCount = useCallback(
    (e) => {
      const count = e.target.value;

      switch (paymentType) {
        case "basic":
          return setPrice(count * M_A_PRICES.basic + SOCIALMEDIA_INT.basic);
        case "standart":
          return setPrice(
            count * M_A_PRICES.standart + SOCIALMEDIA_INT.standart
          );
        case "business":
          return setPrice(
            count * M_A_PRICES.business + SOCIALMEDIA_INT.business
          );
        case "professional":
          return setPrice(
            count * M_A_PRICES.professional + SOCIALMEDIA_INT.professional
          );
        default:
          return 0;
      }
    },
    [monthlyAnnual]
  );

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div
            style={{
              marginTop: "15rem",
            }}
          >
            <Multistep
              onClick={() => {
                console.log("test");
              }}
              prevStyle={{
                width: "100px",
                marginLeft: "1rem",
                borderRadius: "5px",
                backgroundColor: "#33c3f0",
                color: "white",
                letterSpacing: "2px",
                height: "2rem",
              }}
              nextStyle={{
                width: "100px",
                marginLeft: "1rem",
                backgroundColor: "#33c3f0",
                borderRadius: "5px",
                color: "white",
                letterSpacing: "2px",
                height: "2rem",
              }}
              activeStep={0}
              showNavigation={true}
              steps={steps}
            />
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div
            style={{
              marginTop: "9rem",
            }}
          >
            <MonthlyAnnual />
            <div className="form-group">
              <label htmlFor="usersCount">Users Count</label>
              <input
                style={{
                  width: "5rem",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  outline: "none",
                  border: ".5px solid grey",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                placeholder={countVal()}
                min={countVal()}
                type="number"
                id="usersCount"
                aria-describedby="emailHelp"
                onChange={handleUsersCount}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalPrice">Total Price</label>
              <input
                style={{
                  width: "5rem",
                  marginLeft: "1.8rem",
                  marginBottom: "1rem",
                  outline: "none",
                  border: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                type="text"
                id="totalPrice"
                aria-describedby="emailHelp"
                placeholder=""
                value={
                  monthlyAnnual === "annual"
                    ? 12 * price.toPrecision(2) + "$"
                    : price.toFixed(2) + "$"
                }
                readOnly
              />
            </div>
            {paymentTemplate()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
