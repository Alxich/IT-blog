const initialState = {
  news: [],
  newOne: {},
  newsId: [],
  related: [],
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

    case "FETCH_ALL_NEWS":
      return {
        ...state,
        news: action.payload,
        isLoaded: true,
      };

    case "FETCH_CATEGORY_NEWS":
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

    case "FETCH_RELATED_POST":
      return {
        ...state,
        related: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED_NEWS":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default newsData;
