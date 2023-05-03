import React from 'react'
import {useState} from 'react';
import { DatePicker } from 'rsuite';


const ActivityHistory =({ setCloseActivityHistory, closeActivityHistory }) => {
    const [activityHistoryShow, setActivityHistoryShow] = useState("");

    const handleActivityHistoryShow = () => {
        setActivityHistoryShow(!activityHistoryShow);
      };

     const [selectedDate,setSelectedDate]= useState(null); 


  return (
    <div className="form-container">
      <button className="leadDetailsButton" onClick={handleActivityHistoryShow}>
      Activity History
        {activityHistoryShow === true ? (
          <i className="bi bi-chevron-down"></i>
        ) : (
          <i className="bi bi-chevron-right"></i>
        )}
      </button>
      {activityHistoryShow && (
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

export default ActivityHistory;