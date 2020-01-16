import React from 'react';

import style from './cube.scss';

const Cube = () => {
  return <div className={`${style.cube} ${style['color-1']}`} />;
};

export default Cube;
