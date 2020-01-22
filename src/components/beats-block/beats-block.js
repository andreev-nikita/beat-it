import React from 'react';
import { connect } from 'react-redux';

import style from './beats-block.scss';
import Beat from '../beat/beat';

const BeatsBlock = ({ beatsCount, id: trackId }) => {
  const renderBeats = () => {
    const beats = [];

    for (let i = 0; i < beatsCount; i++) {
      beats.push(<Beat key={i} beatId={i} trackId={trackId} />);
    }

    return beats;
  };

  return <div className={style.beatsBlock}>{renderBeats()}</div>;
};

const mapStateToProps = state => ({
  beatsCount: state.beatsCount,
});

export default connect(mapStateToProps)(BeatsBlock);
