import fetchService from "../services/fetchService";

class LeadReferences {
  /**
   * @param {objectj} payload
   * @returns
   */
  addLeadSource(payload) {
    return fetchService("LeadReferences/AddLeadSource", "POST", payload);
  }

  getLeadSourceGetList() {
    return fetchService("LeadReferences/GetList", "GET", "");
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  deleteLeadReference(id) {
    return fetchService("LeadReferences/Delete", "DELETE", id);
  }
}

const leadReferenceWorker = new LeadReferences();

export default leadReferenceWorker;
