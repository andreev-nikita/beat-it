import React from 'react';
import { connect } from 'react-redux';

import style from './cubes-block.scss';
import Cube from '../cube/cube';

const CubesBlock = ({ beatsCount, color, active }) => {
  const renderCubes = () => {
    const cubes = [];

    for (let i = 0; i < beatsCount; i++) {
      cubes.push(<Cube key={i} color={color} active={active.includes(i)} />);
    }

    return cubes;
  };

  return <div className={style['cubes-block']}>{renderCubes()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const trackState = state.mix.find(({ id }) => id === ownProps.id);

  return {
    beatsCount: state.beatsCount,
    color: trackState.color,
    active: trackState.active,
  };
};

export default connect(mapStateToProps)(CubesBlock);
