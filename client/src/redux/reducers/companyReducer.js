const initialState = {
  companies: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COMPANIES":
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
};
