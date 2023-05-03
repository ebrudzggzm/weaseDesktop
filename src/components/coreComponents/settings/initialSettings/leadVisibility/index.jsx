import React, { useEffect, useState } from "react";
import userSettingsWorker from "../../../../../worklayer/userSettingsWorker";
import usersWorker from "../../../../../worklayer/usersWorker";
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";

//AlertMessage
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

const LeadVisibility = ({ setInitialContent }) => {
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [allActive, setAllActive] = useState(false);
  const [users, setUsers] = useState([]);

  //Return InitialContent Menu
  const returnAddEditMenu = () => {
    setInitialContent("initialSettings");
  };
  const activeRef = React.useRef([]);
  const activeCircle = React.useRef([]);

  useEffect(() => {
    if (allActive === true) {
      activeRef.current.map((param) => {
        param.style.backgroundColor = "#4a8869";
      });

      activeCircle.current.map((param) => {
        param.style.marginLeft = "1.5rem";
      });
    } else {
      activeRef.current.map((param) => {
        param.style.backgroundColor = "grey";
      });

      activeCircle.current.map((param) => {
        param.style.marginLeft = "0px";
      });
    }
  }, [allActive]);

  useEffect(() => {
    usersWorker
      .getListByCompanyId()
      .then((res) => {
        console.log(res.data.items);
        setUsers(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSingleOnOff = (param) => {
    userSettingsWorker
      .updateSingleOnOff(param.id)
      .then((res) => {
        alertMessage({
          data: [{ user: "Lead Visibility Updated" }],
        });
      })
      .catch((err) => {
        alertError({
          data: [{ error: "Lead Visibility Not Updated" }],
        });
      });
  };

  const handleAllHide = () => {
    let obj = { leadVisibility: true, userSettings: [2] };

    userSettingsWorker
      .updateAllOnOff(obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="row d-flex m-2 border-bottom ">
        <DefaultIcon
          layoutStyles={{
            width: "1rem",
            marginRight: "1rem",
            cursor: "pointer",
          }}
          onClick={returnAddEditMenu}
          className="bi bi-arrow-left-circle"
        />
        <span className="addEditUserTitle">Lead Visibility</span>
      </div>
      <div className="row d-flex mt-2">
        <h6
          style={{
            width: "20%",
          }}
        >
          Select All
        </h6>
        <div
          style={{
            backgroundColor: allActive === false ? "grey" : "#4a8869",
          }}
          onClick={() => {
            setAllActive(!allActive);
            handleAllHide();
          }}
          className="activeButtonLayout"
        >
          <div
            style={{
              marginLeft: allActive === false ? "0px" : "1.5rem",
            }}
            className="activeButtonOnnOff"
          ></div>
        </div>
      </div>
      <div className="row mt-4">
        <h6>Agent List</h6>
        <table className="table  table-bordered text-center table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((param, key) => {
                return (
                  <tr key={key}>
                    <td>{param.firstName + param.lastName}</td>
                    <td>{param.email}</td>
                    <td>{param.countryPhoneCode + param.phoneNumber}</td>
                    <td>
                      <div
                        ref={(el) => (activeRef.current[key] = el)}
                        style={{
                          backgroundColor: "grey",
                        }}
                        onClick={async (e) => {
                          if (isActiveButton === false) {
                            activeRef.current[key].style.backgroundColor =
                              "grey";
                            activeCircle.current[key].style.marginLeft = "0px";
                            await setIsActiveButton(!isActiveButton);
                          } else {
                            activeRef.current[key].style.backgroundColor =
                              "#4a8869";
                            activeCircle.current[key].style.marginLeft =
                              "1.5rem";
                            await setIsActiveButton(!isActiveButton);
                          }
                          handleSingleOnOff(param);
                        }}
                        className="activeButtonLayout"
                      >
                        <div
                          ref={(el) => (activeCircle.current[key] = el)}
                          className="activeButtonOnnOff"
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadVisibility;
