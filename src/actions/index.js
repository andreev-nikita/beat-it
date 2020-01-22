export const toggleBeatActivity = (trackId, beatId) => {
  return {
    type: 'TOGGLE_BEAT_ACTIVITY',
    payload: { trackId, beatId },
  };
};
