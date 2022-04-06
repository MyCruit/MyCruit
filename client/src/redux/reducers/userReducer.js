const initialState = {
  students: [],
  companies: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return {
        ...state,
        students: action.payload,
      };
    case "GET_ALL_COMPANIES":
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
};
