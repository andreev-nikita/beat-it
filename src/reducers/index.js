const initialState = {
  beatsCount: 28,
  tracks: [
    {
      id: 0,
      colorId: 1,
      activeBeats: [0, 5, 7],
    },
    {
      id: 1,
      colorId: 2,
      activeBeats: [2, 3, 6],
    },
    {
      id: 2,
      colorId: 3,
      activeBeats: [2, 3, 6, 8, 9, 12, 20],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CUBE_ACTIVITY':
      const { trackId, cubeId } = action.payload;

      const changeActivity = activeIndexes => {
        const newIndexes = activeIndexes.includes(cubeId)
          ? activeIndexes.filter(value => value !== cubeId)
          : [...activeIndexes, cubeId];

        return newIndexes;
      };

      const tracks = [...state.tracks];
      tracks[trackId] = {
        ...tracks[trackId],
        activeBeats: changeActivity(tracks[trackId].activeBeats),
      };

      return {
        ...state,
        tracks,
      };
    default:
      return state;
  }
};

export default reducer;
