import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { PaymentSelectedStore } from "../../../stateManagement/atom";
import { useRecoilValue } from "recoil";
import { MontlyAnnualSelectedStore } from "../../../stateManagement/atom";

//Images
import professional from "../../../images/professional.svg";
import connect from "../../../images/connect.svg";
import paper from "../../../images/paper.svg";

const Professional = ({ setPaymentOpen }) => {
  const [paymentState, setPaymentState] = useRecoilState(PaymentSelectedStore);
  const [social, setSocial] = useState(899);

  //State Management
  const monthlyAnnual = useRecoilValue(MontlyAnnualSelectedStore);

  const price = {
    value: monthlyAnnual === "annual" ? " 24.90" : "30.90",
  };

  const handlePayment = () => {
    setPaymentOpen(true);
    setPaymentState("professional");
  };

  return (
    <div className="col-sm-3">
      <div className="card cardProfessional" style={{ width: "18rem" }}>
        <div className="banner">
          <img className="bannerImg" src={professional} />
        </div>
        <div className="card-body">
          <p className="card-text">Sky rocket your sales for cooperates</p>
          &nbsp;
          <p className="card-text">50+ Users</p>
          <div className="productTypeCardPrice">
            <h3>$ {price.value}</h3>&nbsp;
            <span className="productTypeCardPriceText">user/month</span>
          </div>
          <div className="productTypeCardPriceBuy mt-3">
            <button onClick={handlePayment} className="cardProfessionalButton">
              Buy
            </button>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-person-add"></i>
            &nbsp; <b>40.000 leads</b> / month
          </li>
          <li className="list-group-item">
            <i className="bi bi-people"></i>
            &nbsp; Up to <b>50+ users</b>
          </li>
          <li className="list-group-item">
            <i className="bi bi-database"></i>
            &nbsp; <b>1 TB</b> storage
          </li>
          <li className="list-group-item">
            <i className="bi bi-clock"></i>
            &nbsp; <b>Live</b> customer support
          </li>
        </ul>
        <div className="homeProductTypeHR"></div>
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item">
            <img className="connectImg" src={connect} />
            &nbsp; Social Media Integrations for <b>$ {social}*</b>
          </li>
          <li className="list-group-item">
            <img className="paperImg" src={paper} />
            &nbsp; Draft message for $ 0.03 **
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Professional;
