import axios from "axios";

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

export const fetchNews = (count) => async (dispatch) => {
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
        .then(async ({ data }) => await dispatch(setNewsData(data, count)))
        .catch((error) => {
          console.log(error);
        });
};

export const setNewsData = (ids, count) => async (dispatch) => {
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
      .then(async ({ data }) => await dispatch(setNews(data)))
      .catch((error) => {
        console.log(error);
      });
  }

  function randomArray(arr, len) {
    arr.sort(function () {
      return Math.random() > 0.5;
    });

    arr.length = len;

    return arr;
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