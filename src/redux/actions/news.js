import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const fetchNewOne = (id) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  axios
    .get(`/news?id=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setNewOne(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchRelatedNews = (category, id) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  axios
    .get(`/news?category=${category}&id_ne=${id}&_limit=2`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setRelatedNews(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchCatNews = (category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  axios
    .get(`/news?category=${category}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setCatNews(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchAdminNews = (idArray) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  const idCopy = [...idArray];

  const arrayToShow = () => {
    let questionIdGet = idCopy.splice(1).join("&id=");

    return `?id=${idCopy[0]}${questionIdGet && "&id=" + questionIdGet}`;
  };

  const getIds = arrayToShow();

  axios
    .get(`/news${getIds}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setNews(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const postAdminNews = (data, localId) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  const mounthToName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let todayDate = new Date();
  const dd = String(todayDate.getDate()).padStart(2, "0");
  const mm = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = todayDate.getFullYear();

  todayDate = dd + " " + mounthToName[mm - 1] + " " + yyyy;

  data.id
    ? axios
        .put(`/news/${data.id}`, {
          id: data.id ? data.id : uuidv4(),
          data: todayDate,
          ...data,
        })
        .then(({ response }) => dispatch(setUploadNews(true)))
        .catch((error) => {
          console.log(error);
        })
    : axios
        .post(`/news`, {
          id: localId,
          data: todayDate,
          ...data,
        })
        .then(({ response }) => dispatch(setUploadNews(true)))
        .catch((error) => {
          console.log(error);
        });
};

export const fetchNews = (count, type) => async (dispatch) => {
  dispatch({
    type: "SET_LOADED_NEWS",
    payload: false,
  });

  count <= 0
    ? axios
        .get("/news/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Path: "/",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(async ({ data }) => await dispatch(setAllNews(data)))
        .catch((error) => {
          console.log(error);
        })
    : axios
        .get("/newsIds", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Path: "/",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(
          async ({ data }) => await dispatch(setNewsData(data, count, type))
        )
        .catch((error) => {
          console.log(error);
        });
};

export const setNewsData = (ids, count, type) => async (dispatch) => {
  function getValues(getQa) {
    dispatch({
      type: "SET_LOADED_NEWS",
      payload: false,
    });

    return axios
      .get(`/news/${getQa}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Path: "/",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(async ({ data }) => {
        dispatch(setNews(data));
        type === "sidebar" && dispatch(setSidebarNews(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function randomArray(arr, len) {
    const arrayCopy = arr.map((item) => {
      return item.id;
    });

    arrayCopy.sort(function () {
      return Math.random() > 0.5;
    });

    arrayCopy.length = len;

    return arrayCopy;
  }

  const idArray = randomArray(ids, count);

  const arrayToShow = () => {
    let questionIdGet = idArray.splice(1).join("&id=");

    return `?id=${idArray[0]}${questionIdGet && "&id=" + questionIdGet}`;
  };

  const getQa = arrayToShow();

  dispatch(getValues(getQa));
};

export const setNews = (data) => ({
  type: "FETCH_NEWS",
  payload: data,
});

export const setAllNews = (data) => ({
  type: "FETCH_ALL_NEWS",
  payload: data,
});

export const setSidebarNews = (data) => ({
  type: "FETCH_SIDEBAR_NEWS",
  payload: data,
});

export const setNewOne = (data) => ({
  type: "FETCH_NEWONE",
  payload: data,
});

export const setRelatedNews = (data) => ({
  type: "FETCH_RELATED_NEWS",
  payload: data,
});

export const setCatNews = (data) => ({
  type: "FETCH_CATEGORY_NEWS",
  payload: data,
});

export const setUploadNews = (data) => ({
  type: "SET_UPLOAD_NEWS",
  payload: data,
});

