import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const sendMessage =
  ({ name, phoneEmail, message }) =>
  (dispatch) => {
    dispatch({
      type: "SEND_MESSAGE",
      payload: false,
    });
    axios
      .post("/contacts/", {
        id: uuidv4(),
        name: name,
        phoneEmail: phoneEmail,
        message: message,
      })
      .then((response) => dispatch(setStatus(true)))
      .catch((error) => dispatch(setStatus(true)));
  };

export const setStatus = (payload) => ({
  type: "SET_STATUS_MESSAGE",
  payload: payload,
});
