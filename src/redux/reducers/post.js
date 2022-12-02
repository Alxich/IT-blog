const initialState = {
  posts: [],
  post: {},
  related: [],
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
        posts: action.payload,
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

    default:
      return state;
  }
};

export default postsData;
