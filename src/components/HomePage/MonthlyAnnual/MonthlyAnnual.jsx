import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { MontlyAnnualSelectedStore } from "../../../stateManagement/atom";

const MonthlyAnnual = () => {
  const [buttonColor, setButtonColor] = useState("annual");

  //State Management
  const [monthlyAnnualState, setMonthlyAnnualState] = useRecoilState(
    MontlyAnnualSelectedStore
  );

  const handleMonthlyPlans = (e) => {
    setButtonColor("monthly");
    setMonthlyAnnualState("monthly");
  };

  const handleAnnualPlans = (e) => {
    setButtonColor("annual");
    setMonthlyAnnualState("annual");
  };
  return (
    <>
      <div className="pricingHeaderButtons">
        <div
          style={{
            backgroundColor: buttonColor === "monthly" ? "#e6e9ed" : "",
            boxShadow: buttonColor === "monthly" ? "0 0 5px grey" : "",
          }}
          onClick={handleMonthlyPlans}
          className="pricingHeaderButton"
        >
          Monthly Plans
        </div>
        <div
          style={{
            backgroundColor: buttonColor === "annual" ? "#e6e9ed" : "",
            boxShadow: buttonColor === "annual" ? "0 0 5px grey" : "",
          }}
          onClick={handleAnnualPlans}
          className="pricingHeaderButton"
        >
          Annual Plans
          <div className="annualPromotions">-20%</div>
        </div>
      </div>
    </>
  );
};

export default MonthlyAnnual;
