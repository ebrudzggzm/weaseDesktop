import React from 'react'
import {useState} from 'react';
import { DatePicker } from 'rsuite';


const MediaAndDocs =({ setCloseMediaAndDocs, closeLMediaAndDocs }) => {
    const [mediaAndDocsShow, setMediaAndDocsShow] = useState("");

    const handleMediaAndDocsShow = () => {
        setMediaAndDocsShow(!mediaAndDocsShow);
      };

     const [selectedDate,setSelectedDate]= useState(null); 


  return (
    <div className="form-container">
      <button className="leadDetailsButton" onClick={handleMediaAndDocsShow}>
      Media And Docs
        {mediaAndDocsShow === true ? (
          <i className="bi bi-chevron-down"></i>
        ) : (
          <i className="bi bi-chevron-right"></i>
        )}
      </button>
      {mediaAndDocsShow && (
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

export default MediaAndDocs;