import React from "react";
import Select from "react-select";
import CountryFlags from "../../dynamicComponents/countryFlag/CountryFlags";

const CompanyInfo = () => {
  const countries = [
    { value: "Turkey", label: <CountryFlags flag="tr" val="Turkey" /> },
    { value: "Germany", label: <CountryFlags flag="us" val="Germany" /> },
    { value: "England", label: <CountryFlags flag="de" val="England" /> },
  ];

  const phone = [
    { value: "Turkey", label: <CountryFlags flag="tr" val="+90" /> },
    { value: "Germany", label: <CountryFlags flag="us" val="+1" /> },
    { value: "England", label: <CountryFlags flag="de" val="+2" /> },
  ];

  const state = [
    { value: "Turkey", label: "Turkey" },
    { value: "Germany", label: "Germany" },
    { value: "England", label: "England" },
  ];

  const city = [
    { value: "Ankara", label: "Ankara" },
    { value: "İzmir", label: "İzmir" },
    { value: "İstanbul", label: "İstanbul" },
  ];

  const district = [
    { value: "Ankara", label: "Ankara" },
    { value: "İzmir", label: "İzmir" },
    { value: "İstanbul", label: "İstanbul" },
  ];

  return (
    <div className="row mb-2">
      <div className="col-sm-6">
        <form>
          <div className="form-group">
            <label htmlFor="companyShortName">Company Short Name</label>

            <input
              type="text"
              className="form-control"
              id="companyShortName"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="companyLongName">Company Long Name</label>
            <input
              type="text"
              className="form-control"
              id="companyLongName"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Select
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "8rem",
                  }),
                }}
                options={phone}
                placeholder={<CountryFlags flag="tr" val="+90" />}
              />
              <input
                type="number"
                style={{
                  width: "5rem!important",
                  height: "2.2rem",
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
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="taxOffice">Tax Office</label>
            <input
              type="text"
              className="form-control"
              id="taxOffice"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="taxNo">Tax No</label>
            <input
              type="number"
              className="form-control"
              id="taxNo"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
        </form>
      </div>
      <div className="col-sm-6 ">
        <div className="form-group ">
          <label htmlFor="">Country</label>
          <Select
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={countries}
          />
        </div>
        <div className="form-group mt-2 ">
          <label htmlFor="">States</label>
          <Select
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={state}
          />
        </div>
        <div className="form-group mt-2 ">
          <label htmlFor="">City</label>
          <Select
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={city}
          />
        </div>
        <div className="form-group mt-2 ">
          <label htmlFor="companyLongName">District</label>
          <Select
            menuPlacement="auto"
            menuPosition="fixed"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
              }),
            }}
            options={district}
          />
        </div>
        <div className="form-group mt-2 ">
          <label htmlFor="">Address</label>
          <textarea
            type="text"
            className="form-control"
            id="companyShortName"
            aria-describedby="emailHelp"
            placeholder=""
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
