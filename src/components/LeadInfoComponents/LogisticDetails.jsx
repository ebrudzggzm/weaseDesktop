import React from 'react'
import {useState} from 'react';
import { DatePicker } from 'rsuite';


const LogisticDetails =({ setCloseLogisticDetails, closeLogisticDetails }) => {
    const [logisticDetailShow, setLogisticDetailShow] = useState("");

    const handleLogisticDetailShow = () => {
        setLogisticDetailShow(!logisticDetailShow);
      };

     const [selectedDate,setSelectedDate]= useState(null); 


  return (
    <div className="form-container">
      <button className="leadDetailsButton" onClick={handleLogisticDetailShow}>
       Logistic Details
        {logisticDetailShow === true ? (
          <i className="bi bi-chevron-down"></i>
        ) : (
          <i className="bi bi-chevron-right"></i>
        )}
      </button>
      {logisticDetailShow && (
        <div className="leadDetailsClientDetails">
           
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Flight Date</label>
            &nbsp;
            <DatePicker style = {{ border:'1px',padding:'10px'}} selected={selectedDate}  placeholderText="Select a date" onChange={date =>setSelectedDate(date)}  />
          </div> 
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="" >Transfer Details</label>
            &nbsp;
            <input className="leadDetailCountry" type="text" style={{height:'100px'}} />
          </div> 
        </div>
        
      )}
    </div>
  )
}

export default LogisticDetails;