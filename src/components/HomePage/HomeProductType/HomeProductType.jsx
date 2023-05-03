import React from "react";
import Basic from "../Basic/Basic";
import Standart from "../Standart/Standart";
import Professional from "../Professional/Professional";
import Business from "../Business/Business";

const HomeProductType = ({ setPaymentOpen }) => {
  return (
    <>
      <div className="row">
        <Basic setPaymentOpen={setPaymentOpen} />
        <Standart setPaymentOpen={setPaymentOpen} />
        <Business setPaymentOpen={setPaymentOpen} />
        <Professional setPaymentOpen={setPaymentOpen} />
      </div>
    </>
  );
};

export default HomeProductType;
