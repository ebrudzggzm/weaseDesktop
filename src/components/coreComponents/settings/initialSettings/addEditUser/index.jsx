import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

//Components
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";
import Select from "react-select";
import GeneralButton from "../../../../dynamicComponents/buttons/GeneralButton";
import ActiveButton from "../../../../dynamicComponents/buttons/ActiveButton";
import fetchService from "../../../../../services/fetchService";
import CountryFlags from "../../../../dynamicComponents/countryFlag/CountryFlags";

//Workers
import countryWorker from "../../../../../worklayer/countryWorker";
import usersWorker from "../../../../../worklayer/usersWorker";

//AlertMessage
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

// ADD EDIT USER JSX DOSYASI İÇİNDE HEM ADD
// HEMDE EDİT KOMPONENTLERİ KULLANILMIŞTIR

const AddEditUser = ({ setInitialContent }) => {
  //State
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModalData, setEditModalData] = useState({});
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const addUserIcons = {
    color: "grey",
    fontSize: "20px",
  };

  //Return initial Menu
  const returnInitialSettingsMenu = () => {
    setInitialContent("initialSettingsContent");
  };

  //Return Add&EditMenu
  const returnAddEditMenu = () => {
    setEditModal(false);
    setAddModal(false);
  };

  //Open Edit Modal
  const editUserModal = (e) => {
    setEditModalData(e);
    setEditModal(true);
  };

  //Open Add Modal
  const addUserModal = (e) => {
    setAddModal(true);
  };

  //---Fetch Service
  /**
   * @param {array} setAllUsers backendden gelen bütün userlar bu
   * state içerisine atılıyor
   * @return {array} allUser [{...}]
   */

  useEffect(() => {
    usersWorker
      .getListForInitialSettings()
      .then((res) => {
        setAllUsers(res.data.items);
      })
      .catch((err) => {
        alertError({
          data: [{ error: "User not listed" }],
        });
        console.log(err);
      });
  }, [editModal, addModal]);

  //INITIAL SETTINGS ICERİSİNDEKİ ADD & EDIT USER KOMPONENTINDE BULUNAN
  //EDIT-USER KOMPONENTI BURADA TANIMLANMIŞTIR

  const EditUser = React.memo(() => {
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [userAllProfile, setUserAllProfile] = useState([]);
    const [countries, setCountries] = useState([]);
    const [userUpdateInfo, setUserUpdateInfo] = useState({
      id: editModalData.id,
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      userProfileName: null,
      userProfileId: editModalData.userProfileId,
      isActive: isActiveButton,
      countryPhoneCode: null,
    });

    //Handle Active Button Rotate
    /**
     * @func handleActiveButtoRotate
     * @return {Boolean} set green isActive button
     */
    const handleActiveButtonRotate = () => {
      setIsActiveButton(!isActiveButton);
    };

    const countryCodes = countries.map((param) => {
      console.log(param);
      param.label = (
        <CountryFlags flag={param.iso2.toLowerCase()} val={param.phoneCode} />
      );
      param.value = param.name;

      return param;
    });

    /**
     * @param {array} setUserAllProfile state'i tüm userların tam profil bilgilerini tutmaktadır.
     * @return {array} userAllProfile [{...}]
     */
    useEffect(() => {
      usersWorker
        .getListByCompanyId()
        .then((res) => {
          setUserAllProfile(res.data.items);
        })
        .catch((err) => console.log(err));

      countryWorker
        .getCountryList()
        .then((res) => {
          setCountries(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    /**
     * @param {array} confirmUserControlForEmailAndPhone
     * @return {array} [{...}]
     */
    const confirmUserControlForEmailAndPhone = userAllProfile.filter(
      (param) => Number(editModalData.id) === Number(param.id)
    );

    /**
     * @func handleUserUpdateInfo
     * @return {Object} Edit komponentlerindeki tüm inputların value'lrını
     * yakalyıp backende göndermek için kullanılıyor
     */
    const handleUserUpdateInfo = useCallback(() => {
      usersWorker
        .updateUser(userUpdateInfo)
        .then((res) => {
          console.log(res);
          alertMessage({
            data: [{ user: "<h6 style='color:red'>User Info Updated</h6> " }],
          });
        })
        .catch((err) => {
          console.log(err);
          alertMessage({
            data: [{ error: "User not updated" }],
          });
        });
    }, [userUpdateInfo]);

    return (
      <>
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
          <span className="addEditUserTitle mb-3"> Edit User Menu</span>
        </div>

        <div className="row mt-2">
          <div className="col-sm-3">Name</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="text"
              placeholder={editModalData?.fullName?.split(" ")[0]}
              onChange={(e) => {
                const val = e.target.value;
                setUserUpdateInfo({ ...userUpdateInfo, firstName: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Last Name</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="text"
              placeholder={editModalData?.fullName?.split(" ")[1]}
              onChange={(e) => {
                const val = e.target.value;
                setUserUpdateInfo({ ...userUpdateInfo, lastName: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">E-mail</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="email"
              placeholder={confirmUserControlForEmailAndPhone[0]?.email}
              onChange={(e) => {
                const val = e.target.value;
                setUserUpdateInfo({ ...userUpdateInfo, email: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Phone</div>
          <div className="col-sm-4">
            <Select
              onChange={(e) => {
                const val = e.phoneCode;
                setUserUpdateInfo({ ...userUpdateInfo, countryPhoneCode: val });
              }}
              menuPlacement="auto"
              menuPosition="fixed"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                  height: ".1rem",
                }),
              }}
              options={countryCodes}
            />
          </div>
          <div className="col-sm-5">
            <input
              style={{
                borderRadius: "4px",
                border: "none",
                outline: "none",
                border: "1px solid #ccc",
                width: "6vw",
                padding: "0.3rem",
                height: "2.3rem",
              }}
              className="addEditUserInput"
              type="tel"
              placeholder={confirmUserControlForEmailAndPhone[0]?.phoneNumber}
              onChange={(e) => {
                const val = e.target.value;
                setUserUpdateInfo({ ...userUpdateInfo, phoneNumber: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Profile</div>
          <div className="col-sm-9">
            <Select
              onChange={(e) => {
                const val = e.value;
                setUserUpdateInfo({ ...userUpdateInfo, userProfileName: val });
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "80%",
                }),
              }}
              options={[
                { value: "Sales Manager", label: "Sales Manager" },
                { value: "Agent", label: "Agent" },
              ]}
            />
          </div>
          <div className="row mt-4 d-flex">
            <h6 className="addEditUserIsActive ">Is Active</h6>
            <div
              style={{
                backgroundColor: isActiveButton === true ? "grey" : "#4a8869",
              }}
              onClick={() => {
                setUserUpdateInfo({
                  ...userUpdateInfo,
                  isActive: isActiveButton,
                });
                handleActiveButtonRotate();
              }}
              className="activeButtonLayout"
            >
              <div
                style={{
                  marginLeft: isActiveButton === false ? "1.5rem" : "0px",
                }}
                className="activeButtonOnnOff"
              ></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 text-center">
              <GeneralButton
                className="addEditUserButton"
                text="Change Password"
                onClick={() => {
                  setShowChangePassword(!showChangePassword);
                }}
              />
            </div>
            <div className="col-sm-6 text-center">
              <GeneralButton
                onClick={handleUserUpdateInfo}
                className="addEditUserButton"
                text="Update"
              />
            </div>
          </div>
          <div className="row mt-5">
            {showChangePassword && <ChangePassWord />}
          </div>
        </div>
      </>
    );
  });

  //INITIAL SETTINGS ICERİSİNDEKİ ADD & EDIT USER KOMPONENTINDE BULUNAN
  //ADD-USER KOMPONENTI BURADA TANIMLANMIŞTIR

  const AddUser = React.memo(() => {
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [countries, setCountries] = useState([]);
    const [userAdd, setUserAdd] = useState({
      firstName: null,
      lastName: null,
      email: null,
      countryPhoneCode: null,
      phoneNumber: null,
      userProfileId: 1,
      isActive: null,
    });
    console.log(editModalData.userProfileId);
    //Handle Active Button Rotate
    const handleActiveButtonRotate = () => {
      setIsActiveButton(!isActiveButton);
    };

    useEffect(() => {
      countryWorker
        .getCountryList()
        .then((res) => {
          setCountries(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const countryCodes = countries.map((param) => {
      param.label = (
        <CountryFlags flag={param.iso2.toLowerCase()} val={param.phoneCode} />
      );
      param.value = param.name;

      return param;
    });

    const handleAddUser = useCallback(() => {
      console.log(userAdd);
      usersWorker
        .addUser(userAdd)
        .then((res) => {
          console.log(res);
          alertMessage({
            data: [
              { user: "<h6 style='color:red'>User Add Successfuly</h6> " },
            ],
          });
        })
        .catch((err) => {
          console.log(err);
          alertError({
            data: [{ error: "User not add" }],
          });
        });
    }, [userAdd]);

    return (
      <>
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
          <span className="addEditUserTitle mb-3">Add User Menu</span>
        </div>

        <div className="row mt-2">
          <div className="col-sm-3">Name</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="text"
              placeholder={editModalData.name}
              onChange={(e) => {
                const val = e.target.value;
                setUserAdd({ ...userAdd, firstName: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Last Name</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                const val = e.target.value;
                setUserAdd({ ...userAdd, lastName: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">E-mail</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                const val = e.target.value;
                setUserAdd({ ...userAdd, email: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Phone</div>
          <div className="col-sm-4">
            <Select
              onChange={(e) => {
                const val = e.phoneCode;
                setUserAdd({ ...userAdd, countryPhoneCode: val });
              }}
              menuPlacement="auto"
              menuPosition="fixed"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                  height: ".1rem",
                }),
              }}
              options={countryCodes}
            />
          </div>
          <div className="col-sm-5">
            <input
              style={{
                width: "62%",
                borderRadius: " 4px",
                border: "none",
                outline: "none",
                border: "1px solid #ccc",
                padding: "0.3rem",
                height: "2.3rem",
              }}
              type="text"
              placeholder="Phone"
              onChange={(e) => {
                const val = e.target.value;
                setUserAdd({ ...userAdd, phoneNumber: val });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Password</div>
          <div className="col-sm-9">
            <input
              className="addEditUserInput"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Profile</div>
          <div className="col-sm-9">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "80%",
                }),
              }}
              options={[
                { value: "Sales Manager", label: "Sales Manager" },
                { value: "Agent", label: "Agent" },
              ]}
            />
          </div>
          <div className="row mt-4 d-flex">
            <div className="row mt-4 d-flex">
              <h6 className="addEditUserIsActive ">Is Active</h6>
              <div
                style={{
                  backgroundColor: isActiveButton === true ? "grey" : "#4a8869",
                }}
                onClick={() => {
                  setUserAdd({ ...userAdd, isActive: isActiveButton });

                  handleActiveButtonRotate();
                }}
                className="activeButtonLayout"
              >
                <div
                  style={{
                    marginLeft: isActiveButton === false ? "1.5rem" : "0px",
                  }}
                  className="activeButtonOnnOff"
                ></div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-center">
              {/* <GeneralButton
                className="addEditUserButton"
                text="Change Password"
              /> */}
            </div>
            <div className="col-sm-6 text-center">
              <GeneralButton
                onClick={handleAddUser}
                className="addEditUserButton"
                text="Add"
              />
            </div>
          </div>
        </div>
      </>
    );
  });

  //INITIAL SETTINGS ICERİSİNDEKİ ADD & EDIT USER KOMPONENTINDEKİ EDIT-USER İÇERİSİNDE BULUNAN
  //CHANGE-PASSWORD KOMPONENTI BURADA TANIMLANMIŞTIR
  const ChangePassWord = () => {
    const passRef = React.useRef();
    const passReTypeRef = React.useRef();

    const changeUserPassword = () => {
      /**
       * @param {String} password
       * @param {String} passReTypeRef
       */
      const password = String(passRef.current.value);
      const reTypePassword = String(passReTypeRef.current.value);

      if (password === reTypePassword) {
        usersWorker
          .updatePassword({
            userId: editModalData.id,
            password: password,
            reTypePassword: reTypePassword,
          })
          .then((res) => {
            console.log(res);
            alertMessage({
              data: [
                { password: "<h6 style='color:red'>Password Changed</h6> " },
              ],
            });
          })
          .catch((res) => {
            alertMessage({
              data: [{ error: "Password not changed" }],
            });
          });
      } else {
        alertMessage({
          data: [{ error: "Password not Same" }],
        });
      }
    };

    return (
      <>
        <div className="row mt-2">
          <div className="col-sm-3">Password</div>
          <div className="col-sm-9">
            <input
              ref={passRef}
              className="addEditUserInput"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">Re-Type Password</div>
          <div className="col-sm-9">
            <input
              ref={passReTypeRef}
              className="addEditUserInput"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 text-center">
            <GeneralButton
              className="addEditUserButton"
              text="Cancel"
              onClick={() => {
                setShowChangePassword(false);
              }}
            />
          </div>
          <div className="col-sm-6 text-center">
            <GeneralButton
              onClick={changeUserPassword}
              className="addEditUserButton"
              text="Save"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {editModal === true ? (
        <EditUser />
      ) : addModal === true ? (
        <AddUser />
      ) : (
        <div>
          <div className="row d-flex m-2 border-bottom ">
            <DefaultIcon
              layoutStyles={{
                width: "1rem",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={returnInitialSettingsMenu}
              className="bi bi-arrow-left-circle"
            />
            <span className="addEditUserTitle mb-3">
              Add & Edit User{" "}
              <i
                style={addUserIcons}
                onClick={addUserModal}
                className="bi bi-plus-square-fill"
              ></i>
            </span>
          </div>

          <div className="row">
            <table
              style={{ paddingLeft: "10px!important" }}
              className="table  table-bordered text-center table-striped"
            >
              <thead>
                <tr>
                  <th scope="col">Is Online</th>
                  <th scope="col">Name</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(allUsers) &&
                  allUsers.map((param, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          {/* ************************DÜZELTİLECEK ***********************************/}
                          {param.onlineStatusName === ""
                            ? "Online"
                            : param.onlineStatusName}
                        </td>
                        <td>{param.fullName}</td>
                        <td>{param.userProfileName}</td>
                        <td>
                          <DefaultIcon
                            className="bi bi-pencil"
                            iconStyles={{ cursor: "pointer" }}
                            onClick={() => {
                              editUserModal(allUsers[key]);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEditUser;
