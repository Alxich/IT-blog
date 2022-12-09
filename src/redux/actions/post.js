import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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

export const fetchCatPost = (category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
    payload: false,
  });

  axios
    .get(`/posts?category=${category}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setCatPost(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchAdminPost = (idArray) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
    payload: false,
  });

  const idCopy = [...idArray];

  const arrayToShow = () => {
    let questionIdGet = idCopy.splice(1).join("&id=");

    return `?id=${idCopy[0]}${questionIdGet && "&id=" + questionIdGet}`;
  };

  const getIds = arrayToShow();

  axios
    .get(`/posts${getIds}`, {
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

export const postAdminPost = (data, localId) => (dispatch) => {
  dispatch({
    type: "SET_LOADED_POST",
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
        .put(`/posts/${data.id}`, {
          id: data.id ? data.id : uuidv4(),
          data: todayDate,
          ...data,
        })
        .then(({ response }) => dispatch(setUploadPost(true)))
        .catch((error) => {
          console.log(error);
        })
    : axios
        .post(`/posts`, {
          id: localId,
          data: todayDate,
          ...data,
        })
        .then(({ response }) => dispatch(setUploadPost(true)))
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
    const arrayCopy = arr.map((item) => {
      return item.id;
    });

    console.log(arrayCopy);

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

export const setCatPost = (data) => ({
  type: "FETCH_CATEGORY_POSTS",
  payload: data,
});

export const setUploadPost = (data) => ({
  type: "SET_UPLOAD_POST",
  payload: data,
});

