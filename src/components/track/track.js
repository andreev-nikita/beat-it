import React from 'react';

import style from './track.scss';
import TrackController from '../track-controller/track-controller';
import CubesBlock from '../cubes-block/cubes-block';

const Track = ({ id }) => {
  return (
    <div className={style.track}>
      <TrackController id={id} />
      <CubesBlock id={id} />
    </div>
  );
};

export default Track;
