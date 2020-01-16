import React from 'react';

import style from './track.scss';
import TrackController from '../track-controller/track-controller';
import CubesBlock from '../cubes-block/cubes-block';

const Track = () => {
  return (
    <div className={style.track}>
      <TrackController />
      <CubesBlock />
    </div>
  );
};

export default Track;
