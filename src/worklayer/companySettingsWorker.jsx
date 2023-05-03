import fetchService from "../services/fetchService";

class CompanySettings {
  getLeadDurationColor() {
    return fetchService("CompanySettings/GetLeadDurationColor", "GET", "");
  }

  /**
   *
   * @param {object} payload
   * @returns
   */

  updateLeadDurationColor(payload) {
    return fetchService(
      "CompanySettings/UpdateLeadDurationColor",
      "PUT",
      payload
    );
  }

  getHubSpotIntegration() {
    return fetchService(
      "CompanySettings/GetHubSpotIntegrationByCompanyId",
      "GET",
      ""
    );
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updataHubSpotIntegration(payload) {
    return fetchService(
      "CompanySettings/UpdateHubSpotIntegration",
      "PUT",
      payload
    );
  }

  autoAssing() {
    return fetchService("CompanySettings/UpdateAutoAssign", "PUT", {});
  }
}

const companySettingsWorker = new CompanySettings();

export default companySettingsWorker;
