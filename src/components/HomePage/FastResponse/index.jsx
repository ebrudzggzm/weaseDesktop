import React, { useState } from "react";

//Images
import ppl1 from "../../../images/ppl-1.png";
import ppl2 from "../../../images/ppl-2.png";
import ppl3 from "../../../images/ppl-3.png";

const FastResponse = () => {
  const [x, setX] = useState("GREEN:Got time");
  const [y, setY] = useState("Lead is just assigned to the agent.");
  const [z, setZ] = useState("Reminder time is getting closer.");
  const [q, setQ] = useState(ppl1);

  return (
    <>
      <div className="row">
        <h1 style={{ color: "black" }} id="fastresponse">
          Fast response{" "}
        </h1>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "black",
          }}
          className="mt-3"
        >
          all through the sales process.
        </p>
        <p
          style={{
            fontSize: "25px",
            color: "black",
          }}
          className="mt-4"
        >
          Track your response time oryour agent’s at a glance, the moving
          circular bar tracks the time, <br />
          while profile picture will change colors depending on the urgency for
          the response.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2">
          <div
            onMouseOver={() => {
              setX("GREEN:Got time");
              setY("Lead is just assigned to the agent.");
              setZ("Reminder time is getting closer.");
              setQ(ppl1);
            }}
            className="fastResponseCircle mt-2"
          ></div>
          <div
            onMouseOver={() => {
              setX("YELLOW: Time is running fast!");
              setY("Lead is expecting your response now or soon!");
              setZ("It is or almost is the time for your reminder!");
              setQ(ppl2);
            }}
            className="fastResponseYellowSquare mt-3"
          ></div>
          <div
            onMouseOver={() => {
              setX("RED: Urgent response needed");
              setY("Optimal response time has passed, response quickly!");
              setZ(
                "Reminder is on your notifications already, time to take action."
              );
              setQ(ppl3);
            }}
            className="fastResponseRedSquare mt-3"
          ></div>
        </div>
        <div className="col-sm-4">
          <img src={q} />
        </div>
        <div className="col-sm-6 mt-5 ml-5 pplText">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              letterSpacing: "2px",
            }}
            className="mt-1"
          >
            <h3>{x}</h3>
          </div>
          <div className="pplLayout mt-3">
            <div className="greendot"></div>
            <p style={{ marginLeft: "3rem", fontSize: "18px" }}>{y}</p>
          </div>
          <div className="pplLayout mt-2">
            <div className="greendot"></div>
            <p style={{ marginLeft: "3rem", fontSize: "18px" }}>{z}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastResponse;
