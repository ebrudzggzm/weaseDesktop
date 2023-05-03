import fetchService from "../services/fetchService";

class UserSettings {
  /**
   *
   * @param {number} id
   * @returns
   */
  updateSingleOnOff(id) {
    return fetchService(`UserSettings/SingleOnOf?userId=${id}`, "PUT", {});
  }

  updateAllOnOff(payload) {
    return fetchService("UserSettings/AllOnOf", "PUT", payload);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updateUserTranslationSetting(payload) {
    return fetchService(
      "UserSettings/UpdateUserTranslatorSetting",
      "PUT",
      payload
    );
  }

  userSettings(id) {
    return fetchService(`UserSettings/${id}`, "GET", "");
  }
}

const userSettingsWorker = new UserSettings();

export default userSettingsWorker;
