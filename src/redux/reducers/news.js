const initialState = {
  news: [],
  sidebar: [],
  newOne: {},
  newsId: [],
  related: [],
  searchResult: [],
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
        searchResult: action.payload,
        isLoaded: true,
      };

    case "FETCH_NEWONE":
      return {
        ...state,
        newOne: action.payload,
        isLoaded: true,
      };

    case "FETCH_RELATED_NEWS":
      return {
        ...state,
        related: action.payload,
        isLoaded: true,
      };

    case "FETCH_SIDEBAR_NEWS":
      return {
        ...state,
        sidebar: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED_NEWS":
      return {
        ...state,
        isLoaded: action.payload,
      };

    case "SET_UPLOAD_NEWS":
      return {
        ...state,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default newsData;
