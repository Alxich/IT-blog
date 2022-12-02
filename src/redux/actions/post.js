import axios from "axios";

export const searchPost = (name) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
    payload: false,
  });

  axios
    .get(`/posts?title_like=${name}`, {
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
    });
};

export const fetchPost = (id) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
    payload: false,
  });

  axios
    .get(`/posts?id=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setPost(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchRelatedPost = (category, id) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
    payload: false,
  });

  axios
    .get(`/posts?category=${category}&id_ne=${id}&_limit=2`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setRelatedPost(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchPosts = (count) => async (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
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
      type: "SET_LOADED_POST",
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

export const setPost = (data) => ({
  type: "FETCH_POST",
  payload: data,
});

export const setRelatedPost = (data) => ({
  type: "FETCH_RELATED_POST",
  payload: data,
});