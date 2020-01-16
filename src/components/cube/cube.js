import React from 'react';

import style from './cube.scss';

const Cube = ({ color, active }) => {
  let className = style.cube;

  if (active) {
    className += ` ${style[`color-${color}`]}`;
  } else {
    className += ` ${style.inactive}`;
  }

  return <div className={className} />;
};

export default Cube;
