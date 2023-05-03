import fetchService from "../services/fetchService";

class Translation {
  getTranslatatorLanguage() {
    return fetchService("Translators/GetTranslatorLanguages", "GET", "");
  }
  postTranslateMessage() {
    return "post";
  }

  deleteTranslation() {
    return "delete";
  }

  updateTranslation() {
    return "update";
  }
}

const translationWorker = new Translation();

export default translationWorker;
