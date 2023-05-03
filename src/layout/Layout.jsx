import React from "react";

//Import Nav Components
import VerticalNav from "../components/staticComponents/VerticalNav";
import HorizontalNav from "../components/staticComponents/HorizontalNav";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div style={{ minHeight: "100vh" }} className="container-fluid">
        <HorizontalNav />
        <div className="LayoutContainer">
          <div className="LayoutContent">{props.children}</div>
          <div className="LayoutVertical">
            <VerticalNav setNotificationCard={props.setNotificationCard} notificationCard={props.notificationCard} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
