import axios from "axios";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

export const fetchAdmin =
  ({ name, password }) =>
  (dispatch) => {
    dispatch({
      type: "SET_ADMIN_LOADED",
      payload: false,
    });
    axios
      .get(`/users?login=${name}`)
      .then(({ data }) => {
        console.log(data);
        const serverPassword = data[0].password;

        const dataLocal = {
          ...data[0],
          session: uuidv4(),
        };
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
              relatedPost: [...dataLocal.relatedPost],
              relatedNews: [...dataLocal.relatedNews],
            })
          );
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAdminLogout());
        dispatch(setAdminValid(false));
      });
  };

export const registerAdmin = (data) => (dispatch) => {
  dispatch({
    type: "SET_ADMIN_LOADED",
    payload: false,
  });

  const session = uuidv4();

  axios
    .post(`/users`, { id: uuidv4(), session: session, ...data })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      dispatch(setAdminLogout());
      dispatch(setAdminValid(false));
    });
};

export const fetchAdminRelated = (name) => (dispatch) => {
  axios
    .get(`/users?login=${name}`)
    .then(({ data }) => {
      dispatch(
        setAdminRelated({
          relatedPost: data[0].relatedPost,
          relatedNews: data[0].relatedNews,
        })
      );
    })
    .catch((error) => {
      console.log(error);
      dispatch(setAdminLogout());
      dispatch(setAdminValid(false));
    });
};

export const assignNewRelated = (postType, id) => (dispatch) => {
  const dataLocal = store.getState().admin;

  dispatch({
    type: "SET_ADMIN_LOADED",
    payload: dataLocal.session,
  });

  axios
    .put(`/users/${dataLocal.id}`, {
      type: dataLocal.type,
      id: dataLocal.id,
      login: dataLocal.name,
      password: dataLocal.password,
      relatedPost:
        postType === "post"
          ? [...dataLocal.relatedPost, id]
          : dataLocal.relatedPost,
      relatedNews:
        postType === "news"
          ? [...dataLocal.relatedNews, id]
          : dataLocal.relatedNews,
      avatar: dataLocal.avatar ? dataLocal.avatar : "",
      session: dataLocal.session,
    })
    .catch((error) => {
      console.log(error);
      dispatch(setAdminLogout());
      dispatch(setAdminValid(false));
    });

  postType === "post"
    ? axios
        .post(`/postsIds/`, {
          id,
        })
        .catch((error) => {
          console.log(error);
          dispatch(setAdminLogout());
          dispatch(setAdminValid(false));
        })
    : axios
        .post(`/newsIds/`, {
          id,
        })
        .catch((error) => {
          console.log(error);
          dispatch(setAdminLogout());
          dispatch(setAdminValid(false));
        });
};

export const setupAdminSession =
  ({ id, session, login, password, avatar, type, relatedPost, relatedNews }) =>
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
      relatedPost: relatedPost,
      relatedNews: relatedNews,
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
    relatedPost: dataLocal.relatedPost,
    relatedNews: dataLocal.relatedNews,
    avatar: dataLocal.avatar ? dataLocal.avatar : "",
    session: dataLocal.session,
  });
};

export const setAdminLogin = (data) => ({
  type: "ADMIN_LOGIN",
  payload: data,
});

export const setAdminRelated = (data) => ({
  type: "ADMIN_RELATED",
  payload: data,
});

export const setAdminLogout = () => ({
  type: "ADMIN_LOGOUT",
});

export const setAdminValid = (data) => ({
  type: "SET_ADMIN_VALID",
  payload: data,
});
