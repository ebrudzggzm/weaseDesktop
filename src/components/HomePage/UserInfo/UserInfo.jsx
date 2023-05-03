import React from "react";
import Select from "react-select";
import CountryFlags from "../../dynamicComponents/countryFlag/CountryFlags";

//DatePicker
import { DatePicker } from "rsuite";

const UserInfo = () => {
  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const phone = [
    { value: "Turkey", label: <CountryFlags flag="tr" val="+90" /> },
    { value: "Germany", label: <CountryFlags flag="us" val="+1" /> },
    { value: "England", label: <CountryFlags flag="de" val="+2" /> },
  ];

  return (
    <div className="row mb-2">
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1">Gender</label>
            <Select
              menuPlacement="auto"
              menuPosition="fixed"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                }),
              }}
              options={gender}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Select
                menuPlacement="auto"
                menuPosition="fixed"
                placeholder={<CountryFlags flag="tr" val="+90" />}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "8rem",
                  }),
                }}
                options={phone}
              />
              <input
                type="number"
                style={{
                  width: "80%",
                  height: "2.2rem",
                  marginLeft: "2rem",
                  borderRadius: "5px",
                  border: "none",
                  outline: "none",
                  boxShadow: "0 0 2px gray",
                }}
                id="lastName"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="taxOffice">Birthday</label>
            <DatePicker
              style={{ zIndex: "-10!important", width: "50rem" }}
              format="yyyy-MM-dd "
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="identification">Identification No</label>
            <input
              type="number"
              className="form-control"
              id="identification"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
