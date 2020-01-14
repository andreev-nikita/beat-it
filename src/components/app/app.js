import React from 'react';

import style from './app.scss';
import Workspace from '../workspace/workspace';

const App = () => {
  return (
    <div className={style.app}>
      <Workspace />
    </div>
  );
};

export default App;
