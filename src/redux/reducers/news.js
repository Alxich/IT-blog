const initialState = {
  news: [],
  newOne: {},
  newsId: [],
  isLoaded: false,
};

const newsData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        news: action.payload,
        isLoaded: true,
      };

    case "FETCH_NEWONE":
      return {
        ...state,
        newOne: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default newsData;