import React from "react";

//Images
import userImage from "../../../images/landingppnew2.png";

const HomeNavBar = React.memo(() => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fx">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="HomePageNavlogo col-md-2"></div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link HomePageHorizontalAllLinks"
                  aria-current="page"
                  href="#weease"
                >
                  We Ease
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link HomePageHorizontalAllLinks"
                  href="#fastresponse"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link HomePageHorizontalAllLinks"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link HomePageHorizontalAllLinks "
                  href="#footerlogo"
                >
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a
                className="HomePageHorizontalNavbarSignLink mt-2"
                href="/login"
              >
                Sign In
              </a>
              <img className="HomePagelogoutUser" src={userImage} />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
});

export default HomeNavBar;
