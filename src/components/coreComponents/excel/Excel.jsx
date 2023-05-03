import React, { useEffect, useState } from "react";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";
import PropTypes from "prop-types";
import Inputs from "../../dynamicComponents/Inputs/Inputs";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";
import { useRecoilState } from "recoil";
import { excelStore } from "../../../stateManagement/atom";
import fetchService from "../../../services/fetchService";

//Date Picker
import { DateRangePicker } from "rsuite";

const Excel = ({ setExcelLeadsInput }) => {
  //States
  const [dateRange, setDateRange] = useState([null, null]);
  const [excelPayload, setExcelPayload] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [totalPayload, setTotalPayload] = useState([]);

  //State Management
  const [excelState, setExcelState] = useRecoilState(excelStore);

  //Refs
  const col1 = React.useRef([]);
  const col2 = React.useRef([]);

  //Static Column Name
  const column1 = [
    "Name",
    "Phone",
    "Country",
    "Status",
    "Language",
    "Assignment Time",
    "Created Date",
    "Flight Date",
    "Operation Date",
    "Sales Price",
    "Operation Notes",
    "Product Info",
  ];
  const column2 = [
    "Surname",
    "Email",
    "City",
    "Reference",
    "Agent",
    "Response Time",
    "Sales Date",
    "Reminder Date",
    "Operation Type",
    "Deposit",
    "Transfer Details",
  ];

  //Close Excel Modal
  const closeExcelModal = () => {
    setExcelLeadsInput(false);
  };

  //Clear Date Range
  const clearDate = () => {
    setDateRange([null, null]);
  };

  //Handle Excel CheckedList Change
  const handleChange = (e) => {
    setCheckedAll(false);
    if (e.target.checked === true) {
      setExcelPayload([...excelPayload, e.target.value]);
    } else {
      setExcelPayload(excelPayload.filter((item) => item !== e.target.value));
    }
  };

  //Send Data to GlobalState
  const sendData = () => {
    setTotalPayload([
      {
        checkedList: excelPayload,
        date: dateRange,
      },
    ]);
  };

  //SendData to Backend
  useEffect(() => {
    if (totalPayload.length > 0) {
      fetchService("excel", totalPayload, "POST")
        .then((res) => {
          setExcelState(res);
        })
        .catch((err) => console.log(err));
    }
  }, [totalPayload]);

  //Select all CheckBox
  useEffect(() => {
    let colTotalArr = [];

    if (checkedAll === true) {
      col1.current.map((el) => {
        el.checked = true;
      });

      col2.current.map((el) => {
        el.checked = true;
      });

      let collectArray = col1.current.concat(col2.current);
      let uniqCollectArray = [...new Set(collectArray)];

      uniqCollectArray.map((param) => {
        if (param !== null) {
          colTotalArr.push(param.value);
          setExcelPayload(colTotalArr);
        }
      });
    }
  }, [checkedAll]);

  return (
    <React.Fragment>
      <div className="row mt-3 border-bottom ">
        <div className="col-sm-10 d-flex">
          <DefaultIcon className="bi bi-file-earmark-spreadsheet" />
          &nbsp; Get Excel Report
        </div>
        <div className="col-sm-2 text-end">
          <DefaultIcon
            iconStyles={{
              cursor: "pointer",
              fontSize: "18px",
            }}
            className="bi bi-x-lg"
            onClick={closeExcelModal}
          />
        </div>
      </div>
      <div className="row mt-3 excelColumns ">
        <div className="col-sm-6 d-flex mt-1">
          <DefaultIcon className="bi bi-layout-text-sidebar-reverse" />
          &nbsp; Columns
        </div>
        <div style={{ cursor: "pointer" }} className="col-sm-6 text-end">
          <Inputs
            label2="All"
            label2ClassName="excelAllCheckLabel2"
            layoutClassName="excelAllCheck"
            type="checkbox"
            inputClassName="excelCheck"
            onChange={() => {
              setCheckedAll(!checkedAll);
            }}
            checked={checkedAll}
          />
        </div>
      </div>
      <div className="row mt-2 border-bottom ">
        <div className="col-sm-6 excelsOptionColumns">
          {column1.map((col, key) => {
            return (
              <Inputs
                key={key}
                label2={col}
                label2ClassName="excelAllCheckLabel2"
                layoutClassName="excelAllCheck"
                type="checkbox"
                inputClassName="excelCheck"
                onChange={handleChange}
                value={col}
                inputRef={(element) => (col1.current[key] = element)}
              />
            );
          })}
        </div>
        <div className="col-sm-6 excelsOptionColumns">
          {column2.map((col, key) => {
            return (
              <Inputs
                key={key}
                label2={col}
                label2ClassName="excelAllCheckLabel2"
                layoutClassName="excelAllCheck"
                type="checkbox"
                inputClassName="excelCheck"
                onChange={handleChange}
                value={col}
                inputRef={(element) => (col2.current[key] = element)}
              />
            );
          })}
        </div>
      </div>
      <div className="row mt-3 excelColumns ">
        <div className="col-sm-6 d-flex mt-1">
          <DefaultIcon className="bi bi-layout-text-sidebar-reverse" />
          &nbsp; Date Range
        </div>
        <div className="col-sm-6 text-end">
          <GeneralButton
            text="Clear Range"
            onClick={clearDate}
            className="mt-2 filterSettingsClearDateButton"
          />
        </div>
      </div>
      <div className="rows mt-4 excelDateSection mt-3">
        <div className="col-sm-8 excelDateSection">
          <DateRangePicker
            value={dateRange}
            format="yyyy-MM-dd"
            onChange={(e) => {
              setDateRange(e);
            }}
          />
        </div>
        <div className="col-sm-4 text-end me-4">
          <GeneralButton
            className="excelUploadButton"
            icon={<DefaultIcon className="bi bi-upload" />}
            onClick={sendData}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
Excel.propTypes = {
  setExcelLeadsInput: PropTypes.func,
};

export default Excel;
