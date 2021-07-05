const stateReducer = (state = { isVisible: false }, action) => {
  switch (action.type) {
    case "SWITCHMODALVISIBILITY":
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

export default stateReducer;
