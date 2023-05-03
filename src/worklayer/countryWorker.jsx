import fetchService from "../services/fetchService";

class Country {
  getCountryList() {
    return fetchService("Country/GetList", "GET", "");
  }
}

const countryWorker = new Country();

export default countryWorker;
