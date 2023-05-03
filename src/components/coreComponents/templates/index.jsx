import React, { useState } from "react";
import Select from "react-select";
import GeneralButton from "../../dynamicComponents/buttons/GeneralButton";
import DefaultIcon from "../../dynamicComponents/Icons/DefaultIcon";
import DropDownModal from "../../dynamicComponents/modals/DropDownModal";

const Templates = () => {
  const [openMessageTempModal, setOpenMessageTempModal] = useState(false);
  const [openMediaTemplatesModal, setOpenMediaTemplatesModal] = useState(false);
  const [openLeadFormsTemplateModal, setOpenLeadFormsTemplateModal] =
    useState(false);

  const handleClick = (e) => {
    switch (e.target.innerText.trim()) {
      case "Message Templates":
        setOpenMessageTempModal(!openMessageTempModal);
        break;
      case "Media Templates":
        setOpenMediaTemplatesModal(!openMediaTemplatesModal);
        break;
      case "Lead Forms":
        setOpenLeadFormsTemplateModal(!openLeadFormsTemplateModal);
        break;
      default:
        break;
    }
  };

  const messageTemplates = [
    "This is an unassigned template message example.",
    "This is an new lead template message example.",
    "This is a first engagement template message example.",
    "This is a discovery template message example.",
    "This is a negotiation template message example.",
    "This is a sold template message example.",
    "This is a unreachable template message example.",
    "This is a lost template message example.",
  ];

  const lang = [
    { value: "Turkey", label: "Turkey" },
    { value: "Germany", label: "Germany" },
    { value: "England", label: "England" },
  ];

  return (
    <>
      <div className="row p-1">
        <div className="templatesButton">
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className={
                  openMessageTempModal === false
                    ? "bi bi-chevron-right"
                    : "bi bi-chevron-down"
                }
              />
            }
            text="Message Templates"
            className="initialSettingButton"
            onClick={handleClick}
          />
        </div>
        {openMessageTempModal && (
          <DropDownModal>
            {Array.isArray(messageTemplates) &&
              messageTemplates.map((param, key) => {
                return (
                  <div
                    style={{
                      width: "90%",
                      height: "6rem",
                      border: "1px solid #cdd3db",
                      borderRadius: "15px",
                      padding: "1rem 1rem 1rem 1rem",
                    }}
                    className="row mt-3"
                    key={key}
                  >
                    <div>{param}</div>
                  </div>
                );
              })}
          </DropDownModal>
        )}
      </div>
      <div className="row mt-2">
        <div className="templatesButton">
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className={
                  openMediaTemplatesModal === false
                    ? "bi bi-chevron-right"
                    : "bi bi-chevron-down"
                }
              />
            }
            text="Media Templates"
            className="initialSettingButton"
            onClick={handleClick}
          />
        </div>
        {openMediaTemplatesModal && (
          <DropDownModal>
            <div className="row mt-3">
              <span style={{ paddingLeft: "1rem" }}>Lead Product</span>
              <Select
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "100%",
                    marginTop: "1rem",
                    marginRight: "1rem",
                  }),
                }}
              />
            </div>
          </DropDownModal>
        )}
      </div>
      <div className="row mt-2">
        <div className="templatesButton">
          <GeneralButton
            icon={
              <DefaultIcon
                iconStyles={{ color: "#354d6f", fontSize: "1rem" }}
                className={
                  openMediaTemplatesModal === false
                    ? "bi bi-chevron-right"
                    : "bi bi-chevron-down"
                }
              />
            }
            text="Lead Forms"
            className="initialSettingButton"
            onClick={handleClick}
          />
        </div>
        {openLeadFormsTemplateModal && (
          <DropDownModal>
            <div className="row mt-3 mb-3">
              <span style={{ paddingLeft: "1rem" }}>Language</span>
              <Select
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "100%",
                    marginTop: "1rem",
                    marginRight: "1rem",
                  }),
                }}
                options={lang}
              />
            </div>
          </DropDownModal>
        )}
      </div>
    </>
  );
};

export default Templates;
