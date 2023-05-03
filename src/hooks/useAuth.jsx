import jwt_decode from "jwt-decode";

const useAuth = () => {
  let user = { loggedIn: null };
  const token = localStorage.getItem("wease.token");

  if (token != null || token != undefined) {
    var decoded = jwt_decode(token);

    if (decoded?.email !== undefined || decoded?.email !== null) {
      user.loggedIn = true;
      return user && user.loggedIn;
    }
  } else {
    user.loggedIn = false;
    return user && user.loggedIn;
  }
};

export default useAuth;
