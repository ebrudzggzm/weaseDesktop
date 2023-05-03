import React from "react";
import { useState } from "react";
import HomeProductType from "../HomeProductType/HomeProductType";
import { useRecoilState } from "recoil";
import { MontlyAnnualSelectedStore } from "../../../stateManagement/atom";

//Images
import social from "../../../images/social.svg";
import MonthlyAnnual from "../MonthlyAnnual/MonthlyAnnual";

const Pricing = ({ setPaymentOpen }) => {
  return (
    <>
      <div className="mt-5">
        <div className="row mt-5">
          <h1 id="pricing" className="mt-5">
            Pricing
          </h1>
          <p
            className="mt-3"
            style={{
              fontSize: "20px",
            }}
          >
            Choose the plan that’s right for your teams: all platforms are
            designed for you to get the power, control and customization for
            successful sales processes.
          </p>
        </div>
        <div className="row mt-3 display-flex justify-content-center align-items-center">
          <MonthlyAnnual />
          <HomeProductType setPaymentOpen={setPaymentOpen} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
            className="row mt-4"
          >
            *One-time configuration fee to integrate social media apps
            <img
              style={{
                width: "80px",
                height: "12px",
                marginRight: "2rem",
              }}
              src={social}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
            className="row mt-2"
          >
            <span
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                marginRight: "2rem",
              }}
            >
              ** Standard pricing of Whatsapp to save draft messages
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
