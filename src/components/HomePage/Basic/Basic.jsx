import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { PaymentSelectedStore } from "../../../stateManagement/atom";
import { useRecoilValue } from "recoil";
import { MontlyAnnualSelectedStore } from "../../../stateManagement/atom";
import { BasicPriceSelectedStore } from "../../../stateManagement/atom";

//Images
import basic from "../../../images/basic.svg";
import connect from "../../../images/connect.svg";
import paper from "../../../images/paper.svg";

const Basic = ({ setPaymentOpen }) => {
  const [social, setSocial] = useState(139);

  //State Management
  const monthlyAnnual = useRecoilValue(MontlyAnnualSelectedStore);
  const [paymentState, setPaymentState] = useRecoilState(PaymentSelectedStore);
  const [basicPriceState, setBasicPriceState] = useRecoilState(
    BasicPriceSelectedStore
  );

  const price = {
    value: monthlyAnnual === "annual" ? " 30.90" : "39.90",
  };
  // useEffect(() => {
  //   setBasicPriceState({
  //     price,
  //     social,
  //   });
  // }, [price]);

  const handlePayment = () => {
    setPaymentOpen(true);
    setPaymentState("basic");
  };

  return (
    <div className="col-sm-3">
      <div className="card cardBasic" style={{ width: "18rem" }}>
        <div className="banner">
          <img className="bannerImg" src={basic} />
        </div>
        <div className="card-body">
          <p className="card-text">
            Efficient lead management for small
            <br /> teams
          </p>
          <p className="card-text">1 - 5 Users</p>
          <div className="productTypeCardPrice">
            <h3>$ {price.value}</h3>&nbsp;
            <span className="productTypeCardPriceText">user/month</span>
          </div>
          <div className="productTypeCardPriceBuy mt-3">
            <button onClick={handlePayment} className="cardBasicButton">
              Buy
            </button>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-person-add"></i>
            &nbsp; <b>1.000 leads</b> / month
          </li>
          <li className="list-group-item">
            <i className="bi bi-people"></i>
            &nbsp; Up to <b>5 users</b>
          </li>
          <li className="list-group-item">
            <i className="bi bi-database"></i>
            &nbsp; <b>10 GB</b> storage
          </li>
          <li className="list-group-item">
            <i className="bi bi-clock"></i>
            &nbsp; <b> 10 ticket </b> / month
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

export default Basic;
