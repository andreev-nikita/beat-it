import React from 'react';
import { connect } from 'react-redux';

import style from './beat.scss';
import { toggleBeatActivity } from '../../actions';

const Beat = ({ colorId, isActive, beatId, trackId, toggleBeatActivity }) => {
  const classNameColor = isActive ? style[`color${colorId}`] : style.inactive;
  const className = `${style.beat} ${classNameColor}`;

  console.log(`rendered`);

  return (
    <div
      className={className}
      onClick={() => toggleBeatActivity(trackId, beatId)}
    />
  );
};

const mapState = (state, ownProps) => {
  const { trackId, beatId } = ownProps;
  const trackState = state.tracks[trackId];

  return {
    colorId: trackState.colorId,
    isActive: trackState.activeBeats.includes(beatId),
  };
};

const mapDispatch = { toggleBeatActivity };

export default connect(mapState, mapDispatch)(Beat);
