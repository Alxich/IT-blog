import axios from "axios";

export const fetchNews = (count) => async (dispatch) => {
  dispatch({
    type: "SET_LOADED",
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
        .then(async ({ data }) => await dispatch(setNews(data)))
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
      type: "SET_LOADED",
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

    console.log(questionIdGet);

    return `?id=${idArray[0]}${questionIdGet && "&id=" + questionIdGet}`;
  };

  const getQa = arrayToShow();

  dispatch(getValues(getQa));
};

export const setNews = (data) => ({
  type: "FETCH_NEWS",
  payload: data,
});
