const initialState = {
  sendStatus: null,
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        sendStatus: action.payload,
      };

    case "SET_STATUS_MESSAGE":
      return {
        ...state,
        sendStatus: action.payload,
      };

    default:
      return state;
  }
};

export default contacts;