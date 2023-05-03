import fetchService from "../services/fetchService";

class CompanyMessagingChannel {
  getCompanyMessaging() {
    return fetchService(
      "CompanyMessagingChannel/GetListByCompanyId",
      "GET",
      ""
    );
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  updateIsActive(id) {
    return fetchService(
      `CompanyMessagingChannel/UpdateIsActive?id=${id}`,
      "PUT",
      {}
    );
  }
}

const companyMessagingChannelWorker = new CompanyMessagingChannel();

export default companyMessagingChannelWorker;
