import React from "react";

const EasyTracking = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="row">
          <h1 style={{ color: "black" }}>Easy Tracking</h1>
          <br />
          <p
            style={{
              fontSize: "30px",
              color: "black",
            }}
            className="mt-4"
          >
            of sales revenue, sales volume, conversion rates and monthly
            progress.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-sm-7">
            <div className="row">
              <div
                style={{ backgroundColor: "#e6e9ed" }}
                className="col-sm-6 dailyTarget"
              >
                <p style={{ backgroundColor: "#e6e9ed", fontSize: "1.2rem" }}>
                  Daily target revenue
                </p>
                <h1>%80</h1>
                <p style={{ fontSize: "1.2rem" }}>Completed</p>
              </div>
              <div className="col-sm-6 dailyTarget">
                <p style={{ fontSize: "1.2rem" }}>Daily target revenue</p>
                <h1>%72</h1>
                <p style={{ fontSize: "1.2rem" }}>Completed</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-6 dailyTarget">
                <p style={{ fontSize: "1.2rem" }}>Daily target revenue</p>
                <h1>%27</h1>
                <p style={{ fontSize: "1.2rem" }}>Completed</p>
              </div>
              <div className="col-sm-6 dailyTarget">
                <p style={{ fontSize: "1.2rem" }}>Daily target revenue</p>
                <h1>%3</h1>
                <p style={{ fontSize: "1.2rem" }}>Completed</p>
              </div>
            </div>
          </div>
          <div className="col-sm-5 ">
            <h2 className="mt-4">Know your sales.</h2>
            <h2 className="mt-4">Follow your team’s sales</h2>
            <h2 className="mt-4">Track your agent’s sales.</h2>
            <p
              className="mt-5"
              style={{
                fontSize: "20px",
              }}
            >
              Always keep track of work progress from profile pages or report
              screen for more details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyTracking;
