import React from 'react';

import style from './track.scss';
import TrackController from '../track-controller/track-controller';
import BeatsBlock from '../beats-block/beats-block';

const Track = ({ id }) => {
  return (
    <div className={style.track}>
      <TrackController id={id} />
      <BeatsBlock id={id} />
    </div>
  );
};

export default Track;
