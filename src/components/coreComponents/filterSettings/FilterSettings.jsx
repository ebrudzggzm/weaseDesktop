import React, { useState } from "react";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";
import PropTypes from "prop-types";

//Date Picker
import { DateRangePicker } from "rsuite";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";

const FilterSettings = ({ setFilterSettingsLeadsInput }) => {
  //States
  const [selectedChannels, setSelectedChannels] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //Close Excel Modal
  const closeExcelModal = () => {
    setFilterSettingsLeadsInput(false);
  };

  //Clear Date Range
  const clearDate = () => {
    setDateRange([null, null]);
  };

  const channels = [
    { name: "Whatsapp" },
    { name: "Facebook" },
    { name: "Twitter" },
    { name: "Telegram" },
    { name: "Instagram" },
  ];

  return (
    <React.Fragment>
      <div className="row mt-1 border-bottom p-2 ">
        <div className="col-sm-10 d-flex">
          <DefaultIcon className="bi bi-sort-up" />
          &nbsp; Chat Filters
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
      <div className="row border-bottom">
        <div className="col-sm-12 mt-2 mb-2">
          <input
            type="checkbox"
            id="Deleted Leads"
            name="Deleted Leads"
            value="Deleted Leads"
          />
          <label htmlFor="Deleted Leads"> &nbsp; Deleted Leads</label>
          <br />
        </div>
      </div>
      <div className="row border-bottom">
        <div className="col-sm-12 mt-2  mb-2">
          <input type="checkbox" id="Active" name="Active" value="Active" />
          <label htmlFor="Active"> &nbsp; Active</label>
          <br />
        </div>
      </div>
      <div className="row ">
        <span className="filterSettingsTitles">Channels</span>
      </div>
      <div className="row border-bottom p-2">
        <div className="col-sm-5">
          <input
            type="checkbox"
            id="Whatsapp"
            name="Whatsapp"
            value="Whatsapp"
          />
          <label htmlFor="Whatsapp"> &nbsp; Whatsapp</label>
          <br />
          <input
            type="checkbox"
            id="Facebook"
            name="Facebook"
            value="Facebook"
          />
          <label htmlFor="Facebook"> &nbsp; Facebook</label>
          <br />
          <input type="checkbox" id="Twitter" name="Twitter" value="Twitter" />
          <label htmlFor="Twitter"> &nbsp; Twitter</label>
          <br />
        </div>
        <div className="col-sm-5">
          <input
            type="checkbox"
            id="Telegram"
            name="Telegram"
            value="Telegram"
          />
          <label htmlFor="Telegram"> &nbsp; Telegram</label>
          <br />
          <input
            type="checkbox"
            id="Instagram"
            name="Instagram"
            value="Instagram"
          />
          <label htmlFor="Instagram"> &nbsp; Instagram</label>
          <br />
        </div>
        <div className="col-sm-2">
          <input
            type="checkbox"
            id="ChannelsAll"
            name="ChannelsAll"
            value="ChannelsAll"
          />
          <label htmlFor="ChannelsAll"> &nbsp; All</label>
          <br />
        </div>
      </div>
      <div className="row ">
        <span className="filterSettingsTitles">Status</span>
      </div>
      <div className="row border-bottom p-2">
        <div className="col-sm-5">
          <input
            type="checkbox"
            id="Unassigned"
            name="Unassigned"
            value="Unassigned"
          />
          <label htmlFor="Unassigned"> &nbsp; Unassigned</label>
          <br />
          <input
            type="checkbox"
            id="First Engagement"
            name="First Engagement"
            value="First Engagement"
          />
          <label htmlFor="First Engagement"> &nbsp; First Engagement</label>
          <br />
          <input
            type="checkbox"
            id="Negotiation"
            name="Negotiation"
            value="Negotiation"
          />
          <label htmlFor="Negotiation"> &nbsp; Negotiation</label>
          <br />
          <input
            type="checkbox"
            id="Unreachable"
            name="Unreachable"
            value="Unreachable"
          />
          <label htmlFor="Unreachable"> &nbsp; Unreachable</label>
          <br />
        </div>
        <div className="col-sm-5">
          <input
            type="checkbox"
            id="New Lead"
            name="New Lead"
            value="New Lead"
          />
          <label htmlFor="New Lead"> &nbsp; New Lead</label>
          <br />
          <input
            type="checkbox"
            id="Discovery"
            name="Discovery"
            value="Discovery"
          />
          <label htmlFor="Discovery"> &nbsp; Discovery</label>
          <br />
          <input type="checkbox" id="Sold" name="Sold" value="Sold" />
          <label htmlFor="Sold"> &nbsp; Sold</label>
          <br />
          <input type="checkbox" id="Lost" name="Lost" value="Lost" />
          <label htmlFor="Lost"> &nbsp; Lost</label>
          <br />
        </div>
        <div className="col-sm-2">
          <input
            type="checkbox"
            id="StatusAll"
            name="StatusAll"
            value="StatusAll"
          />
          <label htmlFor="StatusAll"> &nbsp; All</label>
          <br />
        </div>
      </div>
      <div className="row border-bottom">
        <span className="filterSettingsTitles">Date Range</span>
      </div>
      <div className="row border-bottom p-3">
        <div className="col-sm-8">
          <DateRangePicker
            value={dateRange}
            format="yyyy-MM-dd"
            onChange={(e) => {
              setDateRange(e);
            }}
          />
        </div>
        <div className="col-sm-4">
          <GeneralButton
            text="Clear Range"
            onClick={clearDate}
            className="filterSettingsClearDateButton"
          />
        </div>
      </div>
      <div className="row ">
        <span className="filterSettingsTitles">Date</span>
      </div>
      <div className="row border-bottom p-2">
        <div className="col-sm-5">
          <input type="checkbox" id="Today" name="Today" value="Today" />
          <label htmlFor="Today"> &nbsp; Today</label>
          <br />

          <input type="checkbox" id="7 days" name="7 days" value="7 days" />
          <label htmlFor="7 days"> &nbsp; 7 days</label>
          <br />
        </div>
        <div className="col-sm-5">
          <input type="checkbox" id="14 days" name="14 days" value="14 days" />
          <label htmlFor="14 days"> &nbsp; 14 days</label>
          <br />
          <input
            type="checkbox"
            id="14+ days"
            name="14+ days"
            value="14+ days"
          />
          <label htmlFor="14+ days"> &nbsp; 14+ days</label>
          <br />
        </div>
        <div className="col-sm-2">
          <input type="checkbox" id="DateAll" name="DateAll" value="DateAll" />
          <label htmlFor="DateAll"> &nbsp; All</label>
          <br />
        </div>
      </div>
      <div className="row ">
        <span className="filterSettingsTitles">Agents</span>
      </div>
      <div className="row border-bottom p-2">
        <div className="col-sm-5">
          <input type="checkbox" id="Agent1" name="Agent1" value="Agent1" />
          <label htmlFor="Agent1"> &nbsp; Türkalp Kucur</label>
          <br />

          <input type="checkbox" id="Agent2" name="Agent2" value="Agent2" />
          <label htmlFor="Agent2"> &nbsp; Hamza Atmaca</label>
          <br />
        </div>
        <div className="col-sm-5">
          <input type="checkbox" id="Agent3" name="Agent3" value="Agent3" />
          <label htmlFor="Agent3"> &nbsp; Burcu Balcı</label>
          <br />
        </div>
        <div className="col-sm-2">
          <input
            type="checkbox"
            id="AgentAll"
            name="AgentAll"
            value="AgentAll"
          />
          <label htmlFor="AgentAll"> &nbsp; All</label>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

FilterSettings.propTypes = {
  setExcelLeadsInput: PropTypes.func,
};

export default FilterSettings;
