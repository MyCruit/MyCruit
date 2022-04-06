const initialState = {
  students: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};
