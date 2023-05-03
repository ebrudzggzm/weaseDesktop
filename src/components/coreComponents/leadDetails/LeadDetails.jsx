import React from "react";
import { useState } from "react";

//Images
import userImage from "../../../images/user.jpg";
import leadBar from "../../../images/lead-bar-3.png";
import ClientDetails from "../../LeadInfoComponents/ClientDetails";
import SalesAndOperations from "../../LeadInfoComponents/SalesAndOperations";
import LogisticDetails from "../../LeadInfoComponents/LogisticDetails";
import ActivityHistory from "../../LeadInfoComponents/ActivityHistory";
import MediaAndDocs from "../../LeadInfoComponents/MediaAndDocs";


const LeadDetails = ({ setCloseLeadDetails, closeLeadDetails }) => {
  //States
  var curr = new Date();
  
  curr.setDate(curr.getDate());

  var date = curr.toISOString().substring(0, 10);

  const handleCloseLeadDetails = () => {
    setCloseLeadDetails(!closeLeadDetails);
  };


  return (
    <React.Fragment>
      <div className="leadDetailsLayout">
        <div className="row">
          <div className="row p-1 header">
            <i
              style={{
                width: "3rem",
                fontSize: "1.5rem",
                marginLeft: ".5rem",
                cursor: "pointer",                
              }}
              className="bi bi-x-lg"
              onClick={handleCloseLeadDetails}
            ></i>

            <img className="logoutUser" src={userImage} />
            <div style={{ width: "10rem", fontSize: "20px" }}>
              Marcus SMITH
              <div
                style={{
                  fontSize: "12px",
                }}
              >
                #USA_HI_103407
              </div>
              <div>Active</div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <img src={leadBar} />
        </div>
        <div className="row mt-2 form-group">
          <div className="row mt-3"  style={{justifyContent:'center', color:'black' , fontSize:'20px',fontWeight:'bolder'}} >
            <div className="col-sm-4" style={{marginTop:'2px', width:'50px', marginLeft:'30px'}} >Status</div>
            <div className="col-sm-8 " >
              <select
                className="logoutSalesManagerDetailContentInput"
                name="cars"
                id="cars"
                style={{width:'200px' , marginLeft:'20px',paddingLeft:'20px'}}
              >
                <option value="male">1.Unassigned</option>
                <option value="female">2. New Lead</option>
                <option value="male">3. First Engagement</option>
                <option value="female">4. Discovery</option>
                <option value="male">5. Negotiation </option>
                <option value="female">6. Sold</option>
                <option value="male">7. Unreachable </option>
                <option value="female">8. Lost</option>
              </select>
            </div>
          </div>
          <div className="row mt-3" style={{justifyContent:'center', color:'black' , fontSize:'20px',fontWeight:'bolder'}}>
            <div className="col-sm-4" style={{marginTop:'2px', width:'50px', marginLeft:'30px'}}>Agent</div>
            <div className="col-sm-8">
              <select
                className="logoutSalesManagerDetailContentInput"
                name="cars"
                id="cars"
                style={{width:'200px' , marginLeft:'20px',paddingLeft:'20px'}}
              >
                <option value="male">Select..</option>
                <option value="female">Hamza Atmaca</option>
                <option value="male">Türkalp Kucur</option>
                <option value="female">Burcu Balcı</option>
              </select>
            </div>
          </div>
          {/* <div className="row mt-4">
            <div className="col-sm-4">Reminder Date</div>
            <div className="col-sm-8">
              <div className="leadDetailsTime">
                <input
                  className="leadDetailsTimeDate"
                  type="date"
                  defaultValue={date}
                />
                <input
                  className="leadDetailsTimeClock"
                  type="number"
                  max="23"
                  min="1"
                />
                &nbsp; :
                <input
                  className="leadDetailsTimeClock"
                  type="number"
                  max="59"
                  min="0"
                />
              </div>
            </div>
          </div> */}
          <div className="row mt-5 ">            
            <div><ClientDetails/></div>
            <div><MediaAndDocs/></div>
            <div><SalesAndOperations/></div> 
            <div><LogisticDetails/></div> 
            <div><ActivityHistory/></div>            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeadDetails;
