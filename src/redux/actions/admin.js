import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const fetchAdmin =
  ({ name, password }) =>
  (dispatch) => {
    dispatch({
      type: "SET_ADMIN_LOADED",
      payload: false,
    });
    axios
      .get(`/users?login=${name}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Path: "/",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(({ data }) => {
        const serverPassword = data[0].password;
        const dataLocal = { ...data[0], session: uuidv4() };
        const localSessionStorage = {
          login: dataLocal.login,
          session: dataLocal.session,
        };
        sessionStorage.setItem(
          "adminLoginInfo",
          JSON.stringify(localSessionStorage)
        );

        serverPassword === password
          ? dispatch(setAdminLogin(dataLocal))
          : dispatch(setAdminValid(false));

        serverPassword === password &&
          dispatch(
            setupAdminSession({
              type: dataLocal.type,
              id: dataLocal.id,
              login: dataLocal.login,
              password: dataLocal.password,
              avatar: dataLocal.avatar ? dataLocal.avatar : "",
              session: dataLocal.session,
            })
          );
      })
      .catch((error) => {
        dispatch(setAdminLogout());
        dispatch(setAdminValid(false));
      });
  };

export const setupAdminSession =
  ({ id, session, login, password, avatar, type }) =>
  (dispatch) => {
    dispatch({
      type: "SET_ADMIN_LOADED",
      payload: session,
    });
    axios.put(`/users/${id}`, {
      type: type,
      id: id,
      login: login,
      password: password,
      avatar: avatar ? avatar : "",
      session: session,
    });
  };

export const setupAdminSettings = (dataLocal) => (dispatch) => {
  const session = uuidv4();

  dispatch({
    type: "SET_ADMIN_LOADED",
    payload: session,
  });

  axios.put(`/users/${dataLocal.id}`, {
    type: dataLocal.type,
    id: dataLocal.id,
    login: dataLocal.login,
    password: dataLocal.password,
    avatar: dataLocal.avatar ? dataLocal.avatar : "",
    session: dataLocal.session,
  });
};

export const setAdminLogin = (data) => ({
  type: "ADMIN_LOGIN",
  payload: data,
});

export const setAdminLogout = () => ({
  type: "ADMIN_LOGOUT",
});

export const setAdminValid = (data) => ({
  type: "SET_ADMIN_VALID",
  payload: data,
});
