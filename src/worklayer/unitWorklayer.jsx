import fetchService from "../services/fetchService";

class Unit {
  getUnitByCompanyId() {
    return fetchService("Unit/GetByCompanyIdWithDefaultList", "GET", "");
  }
}

const unitWorker = new Unit();

export default unitWorker;
