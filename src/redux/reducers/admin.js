const initialState = {
  session: "",
  id: "",
  name: "",
  password: "",
  avatar: "",
  isLoaded: false,
  isValid: null,
  isAuthorized: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.login,
        password: action.payload.password,
        session: action.payload.session,
        avatar: action.payload.avatar,
        isLoaded: true,
        isAuthorized: true,
        isValid: true,
      };

    case "ADMIN_LOGOUT":
      const localSessionStorage = {
        id: "",
        login: "",
        session: "",
      };

      sessionStorage.setItem(
        "adminLoginInfo",
        JSON.stringify(localSessionStorage)
      );

      return {
        ...state,
        id: "",
        name: "",
        password: "",
        session: "",
        avatar: "",
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
