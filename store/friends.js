const initialState = {
  friends: [
    {
      id: Math.random().toString(32).substring(2),
      name: "Jos",
    },
    {
      id: Math.random().toString(32).substring(2),
      name: "Pol",
    },
    {
      id: Math.random().toString(32).substring(2),
      name: "Changi",
    },
    {
      id: Math.random().toString(32).substring(2),
      name: "Mo",
    },
  ],
};

export const addFriend = (name) => ({
  type: "ADDFRIEND",
  payload: name,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDFRIEND":
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            id: Math.random().toString(32).substring(2),
            name: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
