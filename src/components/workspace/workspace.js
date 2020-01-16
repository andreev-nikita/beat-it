import React from 'react';
import { connect } from 'react-redux';

import style from './workspace.scss';
import Track from '../track/track';

const Workspace = ({ mix }) => {
  const createTracks = () => {
    return mix.map(({ id }) => {
      return <Track key={id} id={id} />;
    });
  };

  return <div className={style.workspace}>{createTracks()}</div>;
};

const mapStateToProps = state => ({
  mix: state.mix,
});

export default connect(mapStateToProps)(Workspace);
