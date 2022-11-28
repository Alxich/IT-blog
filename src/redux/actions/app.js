import axios from "axios";

export const fetchData = () => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios
    .get("/webStoreData/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Path: "/",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(({ data }) => dispatch(setData(data)))
    .catch((error) => {
      console.log(error);
    });
};

export const setData = (data) => ({
  type: "FETCH_DATA",
  payload: data,
});
