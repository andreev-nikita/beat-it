const initialState = {
  beatsCount: 28,
  mix: [
    {
      id: 0,
      color: 1,
      active: [0, 5, 7],
    },
    {
      id: 1,
      color: 2,
      active: [2, 3, 6],
    },
    {
      id: 2,
      color: 3,
      active: [2, 3, 6, 8, 9, 12, 20],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
