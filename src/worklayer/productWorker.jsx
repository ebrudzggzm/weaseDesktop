import fetchService from "../services/fetchService";

class Product {
  getProductFamily() {
    return fetchService("ProductFamily/GetByCompanyIdList", "GET", "");
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  addProductFamily(payload) {
    return fetchService("ProductFamily/Add", "POST", payload);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updateProductFamily(payload) {
    return fetchService("ProductFamily/Update", "PUT", payload);
  }

  /**
   *
   * @param {integer} id
   * @returns integer
   */
  deleteProductFamily(id) {
    return fetchService("ProductFamily/Delete", "DELETE", id);
  }

  getProductGroup() {
    return fetchService("ProductGroup/GetByCompanyIdList", "GET", "");
  }

  /**
   *
   * @param {String} id
   * @returns string
   */
  getProductGroupProductFamilyIdList(id) {
    return fetchService(
      `ProductGroup/GetByProductFamilyIdList?productFamilyId=${id}`,
      "GET",
      ""
    );
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  addProductGroup(payload) {
    return fetchService("ProductGroup/Add", "POST", payload);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updateProductGroup(payload) {
    return fetchService("ProductGroup/Update", "PUT", payload);
  }

  /**
   *
   * @param {integer} id
   * @returns integer
   */
  deleteProductGroup(id) {
    return fetchService("ProductGroup/Delete", "DELETE", id);
  }

  getProductSubGroup() {
    return fetchService("ProductSubGroup/GetByCompanyIdList", "GET", "");
  }

  /**
   *
   * @param {String} id
   * @returns string
   */
  getProductSubGroupProductGroupIdList(familyId, groupId) {
    return fetchService(
      `ProductSubGroup/GetDropDownList?productFamilyId=${familyId}&productGroupId=${groupId}`,
      "GET",
      ""
    );
  }

  /**
   *
   * @param {integer} id
   * @returns
   */
  deleteProductSubGroup(id) {
    return fetchService("ProductSubGroup/Delete", "DELETE", id);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  addProductSubGroup(payload) {
    return fetchService("ProductSubGroup/Add", "POST", payload);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updateProductSubGroup(payload) {
    return fetchService("ProductSubGroup/Update", "PUT", payload);
  }

  getProducts() {
    return fetchService("Product/GetListByCompanyId", "GET", "");
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  addProducts(payload) {
    return fetchService("Product/Add", "POST", payload);
  }

  /**
   *
   * @param {int} id
   */
  deleteProducts(id) {
    return fetchService("Product/Delete", "DELETE", id);
  }

  /**
   *
   * @param {object} payload
   * @returns
   */
  updateProduct(payload) {
    return fetchService("Product/Update", "PUT", payload);
  }
}

const productWorker = new Product();

export default productWorker;
