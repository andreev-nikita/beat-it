import React from 'react';
import { connect } from 'react-redux';

import style from './workspace.scss';
import Track from '../track/track';

const Workspace = ({ tracks }) => {
  const createTracks = () => {
    return tracks.map(({ id }) => {
      return <Track key={id} id={id} />;
    });
  };

  return <div className={style.workspace}>{createTracks()}</div>;
};

const mapStateToProps = state => ({
  tracks: state.tracks,
});

export default connect(mapStateToProps)(Workspace);
