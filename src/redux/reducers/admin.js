const initialState = {
  session: "",
  name: "",
  password: "",
  isLoaded: false,
  isValid: null,
  isAuthorized: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return {
        ...state,
        name: action.payload.login,
        password: action.payload.password,
        session: action.payload.session,
        isLoaded: true,
        isAuthorized: true,
        isValid: true,
      };

    case "ADMIN_LOGOUT":
      const localSessionStorage = {
        login: "",
        session: "",
      };

      sessionStorage.setItem(
        "adminLoginInfo",
        JSON.stringify(localSessionStorage)
      );

      return {
        ...state,
        name: "",
        password: "",
        session: "",
        isLoaded: false,
        isAuthorized: false,
        isValid: false,
      };

    case "SET_ADMIN_VALID":
      return {
        ...state,
        isValid: action.payload,
        isLoaded: true,
      };

    case "SET_ADMIN_SESSION":
      return {
        ...state,
        session: action.payload,
      };

    case "SET_ADMIN_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default admin;
