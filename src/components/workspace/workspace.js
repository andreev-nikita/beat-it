import React from 'react';

import style from './workspace.scss';
import Track from '../track/track';

const Workspace = () => {
  return (
    <div className={style.workspace}>
      <Track />
    </div>
  );
};

export default Workspace;
