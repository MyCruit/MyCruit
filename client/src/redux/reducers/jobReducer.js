const initialState = {
  jobs: [],
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
