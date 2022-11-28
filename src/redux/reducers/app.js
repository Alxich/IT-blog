const initialState = {
  defaultData: [],
  isLoaded: false,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        defaultData: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default appData;
