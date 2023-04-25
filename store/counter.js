// DUCKSPATTERN;
// alles exporten maar reducer default export

/** ACTIONS */
export const incrementAction = {
  type: "INCREMENT",
};
export const decrementAction = {
  type: "DECREMENT",
};
export const setValue88 = {
  type: "SETVALUE88",
  payload: 88,
};
/** ACTIONCREATORS */
export const setValue = (nr) => ({
  type: "SETVALUE",
  payload: nr,
});
const initialState = {
  counter: 15,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "SETVALUE88":
      return {
        ...state,
        counter: action.payload,
      };
    case "SETVALUE":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
/** REDUCER */

export default reducer;
