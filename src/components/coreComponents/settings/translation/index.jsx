import React, { useCallback, useEffect, useState } from "react";

//Reusable Components Import
import DefaultIcon from "../../../dynamicComponents/Icons/DefaultIcon";
import Select from "react-select";
import ActiveButton from "../../../dynamicComponents/buttons/ActiveButton";

//WorkLayer Import
import translationWorker from "../../../../worklayer/translation";
import userSettingsWorker from "../../../../worklayer/userSettingsWorker";

//Alerts
import alertError from "../../../../hooks/alertError";
import alertMessage from "../../../../hooks/alertMessage";

//JWT
import jwt_decode from "jwt-decode";

const Translation = React.memo(({ setSettingsContent }) => {
  //State
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [translate, setTranslate] = useState(() => []);

  const [getTranslate, setGetTranslate] = useState({
    sourceLanguageCode: null,
    sourceLanguageName: null,
    targetLanguageCode: null,
    targetLanguageName: null,
  });

  const [selectedLanguage, setSelectedLanguage] = useState({
    source: null,
    target: null,
  });

  const returnSettingsMenu = useCallback(() => {
    setSettingsContent("SettingContent");
  }, [setSettingsContent]);

  const handleActiveButtonRotate = () => {
    setIsActiveButton(!isActiveButton);
  };

  const options = translate.map((val) => {
    return {
      value: val.langCode,
      label: val.langDescription,
      enumOrder: val.enumOrder,
    };
  });

  const token = localStorage.getItem("wease.token");
  var decoded = jwt_decode(token);

  useEffect(() => {
    translationWorker
      .getTranslatatorLanguage()
      .then((res) => {
        setTranslate(res.data.items);
      })
      .catch((err) => {
        alertMessage({
          data: [{ error: [err] }],
        });
      });

    userSettingsWorker
      .userSettings(
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      )
      .then((res) => {
        setGetTranslate({
          sourceLanguageCode: res.data.sourceLanguageCode,
          sourceLanguageName: res.data.sourceLanguageName,
          targetLanguageCode: res.data.targetLanguageCode,
          targetLanguageName: res.data.targetLanguageName,
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleTranslateOpt = () => {
    let obj = {
      userId:
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
      googleTranslatorOn: isActiveButton,
      sourceLanguageCode: selectedLanguage.source,
      targetLanguageCode: selectedLanguage.target,
    };

    userSettingsWorker
      .updateUserTranslationSetting(obj)
      .then((res) => {
        alertMessage({
          data: [{ data: "Translation Settings Updated" }],
        });
      })
      .catch((err) => {
        console.log(err);
        alertError({
          data: [{ error: "Translation Setting Not Updated" }],
        });
      });
  };

  return (
    <>
      <div className="row d-flex mt-3 border-bottom  ">
        <DefaultIcon
          layoutStyles={{
            width: "3rem",
            cursor: "pointer",
            marginRight: ".4rem",
            marginBottom: "1rem",
          }}
          className="bi bi-arrow-left-circle"
          onClick={returnSettingsMenu}
        />
        Translation
      </div>
      <div className="row d-flex mt-3">
        <span
          style={{
            width: "10rem",
            marginLeft: "1rem",
          }}
        >
          Translator Open
        </span>
        <div
          style={{
            width: "5rem",
            marginLeft: "1rem",
          }}
        >
          <ActiveButton
            isActiveButton={isActiveButton}
            onClick={handleActiveButtonRotate}
          />
        </div>
      </div>
      <div className="row mt-3">
        <span
          style={{
            width: "10rem",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          Source Language
        </span>
        <Select
          menuPlacement="auto"
          menuPosition="fixed"
          placeholder={getTranslate.sourceLanguageName}
          onChange={(e) => {
            setSelectedLanguage({
              ...selectedLanguage,
              source: e.value,
            });
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "80%",
              marginLeft: "1rem",
            }),
          }}
          options={options}
        />
      </div>
      <div className="row mt-3">
        <span
          style={{
            width: "10rem",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          Target Language
        </span>
        <Select
          menuPlacement="auto"
          menuPosition="fixed"
          placeholder={getTranslate.targetLanguageName}
          onChange={(e) => {
            setSelectedLanguage({
              ...selectedLanguage,
              target: e.value,
            });
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "80%",
              marginLeft: "1rem",
            }),
          }}
          options={options}
        />
      </div>
      <div className="row mt-3">
        <button
          onClick={handleTranslateOpt}
          className="translationSaveButton mt-2"
        >
          Save
        </button>
      </div>
    </>
  );
});

export default Translation;
