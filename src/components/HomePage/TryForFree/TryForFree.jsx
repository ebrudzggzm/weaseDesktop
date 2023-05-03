import React from "react";

const TryForFree = () => {
  return (
    <>
      <div className="row">
        <div style={{ marginTop: "15rem" }} className="col-sm-6">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                aria-describedby="emailHelp"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="form-group mt-4 ">
              <label for="exampleInputEmail1">E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-4">
              <label for="exampleInputPassword1">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Phone"
              />
            </div>

            <button type="submit" className="mt-4 btn btn-info">
              Send
            </button>
          </form>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </>
  );
};

export default TryForFree;
