import React from 'react';
import { connect } from 'react-redux';

import style from './cubes-block.scss';
import Cube from '../cube/cube';

const CubesBlock = ({ beatsCount, id: trackId }) => {
  const renderCubes = () => {
    const cubes = [];

    for (let i = 0; i < beatsCount; i++) {
      cubes.push(<Cube key={i} cubeId={i} trackId={trackId} />);
    }

    return cubes;
  };

  return <div className={style.cubesBlock}>{renderCubes()}</div>;
};

const mapStateToProps = state => ({
  beatsCount: state.beatsCount,
});

export default connect(mapStateToProps)(CubesBlock);
