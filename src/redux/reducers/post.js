const initialState = {
  posts: [],
  post: {},
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

    case "FETCH_POST":
      return {
        ...state,
        post: action.payload,
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

export default postsData;
