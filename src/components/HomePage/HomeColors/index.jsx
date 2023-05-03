import React from "react";

const HomeColors = () => {
  return (
    <>
      <div className="row text-center mt-5">
        <h1 className="mt-5">Which ones are your colors?</h1>
        <p className="mt-3" style={{ fontSize: "35px" }}>
          Select colors and create themes for your working mood
        </p>
      </div>
      <div className="row text-center mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-sm-12"
        >
          <div id="colorDiv1" className="color-div color-div-1 text-md-center">
            1
          </div>
          <div id="colorDiv2" className="color-div color-div-2 text-md-center">
            2
          </div>
          <div id="colorDiv3" className="color-div color-div-3"></div>
          <div id="colorDiv4" className="color-div color-div-4"></div>
          <div id="colorDiv5" className="color-div color-div-5"></div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-5 darkblue mt-5  ms-5"></div>
        <div className="col-sm-5 darkblueb mt-5 ms-5"></div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6 mt-5">
          <div className="row mt-5 inforow">
            <div className="col-sm-2 setReminders"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-9">
              <h2 className="mb-2">Set reminders</h2>
              <p>It’s impossible to remember everything!</p>
              <p>Keep your reminded to write back to lead.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row mt-5 inforow">
            <div className="col-sm-2 templatesAt"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-9">
              <h2 className="mb-2">Templates at hand</h2>
              <p>Operation medias, forms or even ready-to-sent</p>
              <p>messages for leads are all easily accessible.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6">
          <div className="row mt-5 inforow">
            <div className="col-sm-2  calenderIC"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-9 ">
              <h2 className="mb-2">All is on your calendar</h2> Every reminder
              you set will automatically
              <br /> appear on your calendar. You can add more
              <br /> reminders, events or meetings.
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row mt-5 inforow">
            <div className="col-sm-2 mt-3 organized"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-8 ">
              <h2 className="mb-2">Keep notes organized</h2> Your lead’s notes
              and self-notes can be kept
              <br /> in different screens but you’ll find them <br />
              organized under notes tab.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeColors;
