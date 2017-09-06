const defaultState = { demos: [], loading: false };

const reducer = (state = defaultState, action) => {
  // console.log("FROM REDUCER ROOT", action, action.payload)
  switch (action.type) {
    case "START_FETCH_DEMOS":
      return {
        ...state,
        demos: [],
        loading: true
      };
    case "FETCH_DEMOS":
      return {
        ...state,
        demos: action.payload,
        loading: false
      };
    case "START_ADD_DEMO":
      return {
        ...state,
        demos: [],
        loading: false
      };
    case "ADD_DEMO":
      return {
        ...state,
        demos: [...this.state.demos, action.payload],
        loading: false
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
