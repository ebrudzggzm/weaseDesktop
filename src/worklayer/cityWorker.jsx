import fetchService from "../services/fetchService";

class City {
  getCityListByCountryId() {
    return fetchService("City/GetList", "GET", "");
  }
}

const cityWorker = new City();

export default cityWorker;
