import { nanoid } from "nanoid";
/**
 * TYPES
 */
const ADDTODO = "ADDTODO";
const REMOVETODO = "REMOVETODO";
const TOGGLETODO = "TOGGLETODO";

/**
 * ACTION CREATORS
 */
export const addTodo = (str) => ({
  type: ADDTODO,
  payload: str,
});
export const removeTodo = (id) => ({
  type: REMOVETODO,
  payload: id,
});
export const toggleTodo = (id) => ({
  type: TOGGLETODO,
  payload: id,
});

/**
 * INITIAL STATE
 */
const initState = {
  todos: [
    {
      id: nanoid(),
      name: "Gras afrijden",
      checked: false,
    },
    {
      id: nanoid(),
      name: "Tv kijken",
      checked: false,
    },
    {
      id: nanoid(),
      name: "Netflix bingen",
      checked: true,
    },
  ],
};

/**
 * REDUCER
 */
export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADDTODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            name: payload,
            checked: false,
          },
        ],
      };
    case REMOVETODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id != payload),
      };
    case TOGGLETODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, checked: !todo.checked } : todo
        ),
      };
    default:
      return state;
  }
};
