import React from 'react';
import { connect } from 'react-redux';

import style from './cube.scss';

const Cube = ({ colorId, isActive, cubeId, trackId, toggleActivity }) => {
  const classNameColor = isActive ? style[`color${colorId}`] : style.inactive;
  const className = `${style.cube} ${classNameColor}`;

  return (
    <div
      className={className}
      onClick={() => {
        toggleActivity({ cubeId, trackId });
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { trackId, cubeId } = ownProps;
  const trackState = state.tracks[trackId];

  return {
    colorId: trackState.colorId,
    isActive: trackState.activeBeats.includes(cubeId),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleActivity: cubeId => {
      dispatch({
        type: 'TOGGLE_CUBE_ACTIVITY',
        payload: cubeId,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);
