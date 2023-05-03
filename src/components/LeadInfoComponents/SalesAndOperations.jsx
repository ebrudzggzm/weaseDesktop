import React from 'react'
import {useState} from 'react';
import { DatePicker } from 'rsuite';


const SalesAndOperations =({ setCloseLeadDetails, closeLeadDetails }) => {
    const [salesDetailShow, setSalesDetailShow] = useState("");

    const handleSalesDetailShow = () => {
        setSalesDetailShow(!salesDetailShow);
      };

     const [selectedDate,setSelectedDate]= useState(null); 


  return (
    <div className="form-container">
      <button className="leadDetailsButton" onClick={handleSalesDetailShow}>
       Sales and Operation Details
        {salesDetailShow === true ? (
          <i className="bi bi-chevron-down"></i>
        ) : (
          <i className="bi bi-chevron-right"></i>
        )}
      </button>
      {salesDetailShow && (
        <div className="leadDetailsClientDetails">
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Lead Product</label>
            &nbsp;
            <select className="leadDetailGender" name="gender" id="gender">
              <option value="male">Hair Implant</option>
              <option value="female">Example</option>
            </select>
          </div>

          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Product Info</label>
            &nbsp;
            <select className="leadDetailGender" name="gender" id="gender">
              <option value="male">Operation+Transfer</option>
              <option value="female">Example</option>
            </select>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Currency</label>
            &nbsp;
            <select className="leadDetailCountry" name="country" id="country">
              <option value="male">USD</option>
              <option value="female">EURO</option>
              <option value="male">TL</option>              
            </select>
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Depozit</label>
            &nbsp;
            <input className="leadDetailCountry" type="text" />
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Total Price</label>
            &nbsp;
            <input className="leadDetailCountry" type="text" />
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Sales Date</label>
            &nbsp;
            <DatePicker style = {{ border:'1px',padding:'10px'}} selected={selectedDate}  placeholderText="Select a date" onChange={date =>setSelectedDate(date)}  />
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Operation Date</label>
            &nbsp;
            <DatePicker style = {{ border:'1px',padding:'10px'}} selected={selectedDate}  placeholderText="Select a date" onChange={date =>setSelectedDate(date)}  />
          </div>
          <div className="mt-4 leadDetailsClientDetailsSection">
            <label htmlFor="">Operation Notes</label>
            &nbsp;
            <input className="leadDetailCountry" type="text" style={{height:'100px'}}/>
          </div>
          
         
        </div>
      )}
    </div>
  )
}

export default SalesAndOperations;