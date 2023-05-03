import React from "react";
import Inputs from "../../dynamicComponents/Inputs/Inputs";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";

const HelpDesk = () => {
  return (
    <>
      <div className="helpDeskContainer">
        <div className="row ">
          <div className="col-sm-12 mt-2">Ticket-Report Something</div>
          <div className="row mt-2">
            <div className="col-sm-9">
              Remaining Ticket / <span>Status: Open</span>
            </div>
            <div className="col-sm-3">
              <div className="helpDeskRemainingTicket"></div>
            </div>
          </div>
        </div>
        <div className="row mt-2 ">
          <span className="helpDeskInfoTitle">
            Let us know what's wrong, we'll get back to you shortly.
          </span>
        </div>
        <div className="row-mt-2">
          <div className="col-sm-12">
            <Inputs
              labelClassName="helpDeskLabel"
              inputClassName="helpDeskInput"
              layoutClassName="helpDeskInputLayout"
              label="From:"
              type="text"
            />
          </div>
        </div>
        <div className="row-mt-2">
          <div className="col-sm-12">
            <Inputs
              labelClassName="helpDeskLabel"
              inputClassName="helpDeskInput"
              layoutClassName="helpDeskInputLayout"
              label="Subject:"
              type="text"
            />
          </div>
        </div>
        <div className="row mt-2 ">
          <div
            style={{
              width: "100%",
              height: "10rem",
              margin: "auto",
              borderRadius: "10px",
            }}
          >
            <textarea
              placeholder="...Tell Us, What's Wrong"
              className="helpDeskEmailMessage"
            ></textarea>
            <GeneralButton className="helpDeskEmailSendButton" text="Send" />
            <img
              style={{ marginLeft: "1rem" }}
              src="https://test.wease.io/images/panel/MICROPHONE-ICON.png"
            />
            <img src="https://test.wease.io/images/panel/ATTACHMENTS-ICON.png" />
            <img
              style={{ marginLeft: "10rem" }}
              src="https://test.wease.io/images/panel/MEDIA-DELETE-ICON-BUTTON.png"
            />
          </div>
        </div>
        <div className="row mt-2">
          <table className="table">
            <thead>
              <tr>
                <th className="helpDeskTableHead" scope="col">
                  Ticket Date
                </th>
                <th className="helpDeskTableHead" scope="col">
                  Approved Date
                </th>
                <th className="helpDeskTableHead" scope="col">
                  Status
                </th>
                <th className="helpDeskTableHead" scope="col">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
