import React from 'react';

import style from './cubes-block.scss';
import Cube from '../cube/cube';

const CubesBlock = () => {
  return (
    <div className={style['cubes-block']}>
      <Cube />
    </div>
  );
};

export default CubesBlock;
