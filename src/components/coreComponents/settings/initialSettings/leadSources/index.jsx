import React, { useEffect, useState } from "react";
import leadReferenceWorker from "../../../../../worklayer/leadReferencesWorker";
import GeneralButton from "../../../../dynamicComponents/buttons/GeneralButton";
import DefaultIcon from "../../../../dynamicComponents/Icons/DefaultIcon";
import Inputs from "../../../../dynamicComponents/Inputs/Inputs";

//Alert Message
import alertMessage from "../../../../../hooks/alertMessage";
import alertError from "../../../../../hooks/alertError";

const LeadSources = ({ setInitialContent }) => {
  //States
  const [leadSources, setLeadSources] = useState([]);
  const [flag, setFlag] = useState(true);

  //Return InitialContent Menu
  const returnAddEditMenu = () => {
    setInitialContent("initialSettings");
  };

  //Get all lead sources
  useEffect(() => {
    leadReferenceWorker
      .getLeadSourceGetList()
      .then((res) => {
        setLeadSources(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [flag]);

  //Delete operation
  const deleteOperation = (param) => {
    leadReferenceWorker
      .deleteLeadReference({ leadReferenceId: param.id })
      .then((res) => {
        setFlag(!flag);
        alertMessage({
          data: [{ data: "Lead Reference Deleted " }],
        });
      })
      .catch((err) => {
        alertError({
          data: [{ error: "Lead Reference Not Deleted " }],
        });
      });
  };

  const addLeadSource = React.useRef();

  const handleAddLeadSource = () => {
    let obj = {
      name: String(addLeadSource.current.value),
    };

    leadReferenceWorker
      .addLeadSource(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Lead Reference Added " }],
        });
        setFlag(!flag);
        addLeadSource.current.value = "";
      })
      .catch((err) => {
        console.log(err);

        alertError({
          data: [{ error: "Lead Reference Not Added " }],
        });
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
        <span className="addEditUserTitle">Lead Sources</span>
      </div>
      <div className="row mt-4">
        <table className="table  table-bordered text-center table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(leadSources) &&
              leadSources.map((param, key) => {
                return (
                  <tr key={key}>
                    <td>{param.name}</td>
                    <td>
                      <DefaultIcon
                        layoutStyles={{ cursor: "pointer" }}
                        className="bi bi-trash"
                        onClick={() => {
                          deleteOperation(leadSources[key]);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="row d-flex p-3">
        <div className="col-sm-8 leadSourceColumn">
          <Inputs
            inputRef={addLeadSource}
            label="Name"
            inputClassName="leadSourceInputClassname"
            layoutClassName="leadSourceInputLayout"
            type="text"
            placeholder="Add Lead Source"
          />
        </div>
        <div className="col-sm-4 leadSourceColumn">
          <GeneralButton
            onClick={handleAddLeadSource}
            className="leadSourceButton"
            text="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadSources;
