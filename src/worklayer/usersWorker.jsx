import fetchService from "../services/fetchService";

class Users {
  /**
   * @param GET method
   * @return {promise}
   */
  users(id) {
    return fetchService(`Users/${id}`, "GET");
  }

  /**
   * @param GET method
   * @return {promise}
   */
  getListByCompanyId() {
    return fetchService("Users/GetListByCompanyId", "GET");
  }

  /**
   * @param GET method
   * @return {promise}
   */

  getListForInitialSettings() {
    return fetchService("Users/GetListForInitialSettings", "GET");
  }

  /**
   * @param {object} payload
   * @param {addUser} POST method
   * @return {promise}
   */
  addUser(payload) {
    return fetchService("Users/AddUser", "POST", payload);
  }
  /**
   * @param {object} payload
   * @param {updatePassword} PUT method
   * @return {promise}
   */

  updateUser(payload) {
    return fetchService("Users/UpdateUser", "PUT", payload);
  }

  /**
   * @param {object} payload
   * @param {updatePassword} PUT method
   * @return {promise}
   */
  updatePassword(payload) {
    return fetchService("Users/UpdatePassword", "PUT", payload);
  }
}

const usersWorker = new Users();

export default usersWorker;
