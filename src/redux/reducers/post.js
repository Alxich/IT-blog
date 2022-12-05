const initialState = {
  posts: [],
  post: {},
  related: [],
  searchResult: [],
  isLoaded: false,
};

const postsData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
      };

    case "FETCH_CATEGORY_POSTS":
      return {
        ...state,
        searchResult: action.payload,
        isLoaded: true,
      };

    case "FETCH_POST":
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };

    case "FETCH_RELATED_POST":
      return {
        ...state,
        related: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED_POST":
      return {
        ...state,
        isLoaded: action.payload,
      };

    case "SET_UPLOAD_POST":
      return {
        ...state,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default postsData;
