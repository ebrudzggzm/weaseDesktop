import fetchService from "../services/fetchService";

class Currency {
  getCurrencyList() {
    return fetchService("Currencies/GetList", "GET", "");
  }
}

const currencyWorker = new Currency();

export default currencyWorker;
