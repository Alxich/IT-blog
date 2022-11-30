import axios from "axios";

export const fetchPosts = (count) => async (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  count <= 0
    ? axios
        .get("/posts/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Path: "/",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(({ data }) => dispatch(setPosts(data)))
        .catch((error) => {
          console.log(error);
        })
    : axios
        .get("/postsIds", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Path: "/",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(({ data }) => dispatch(setPostsData(data, count)))
        .catch((error) => {
          console.log(error);
        });
};

export const setPostsData = (ids, count) => async (dispatch) => {
  function getValues(getQa) {
    dispatch({
      type: "SET_LOADED",
      payload: false,
    });

    return axios
      .get(`/posts/${getQa}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Path: "/",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(async ({ data }) => await dispatch(setPosts(data)))
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

export const setPosts = (data) => ({
  type: "FETCH_POSTS",
  payload: data,
});
