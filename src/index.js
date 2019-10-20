import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };
  ReactDOM.render(
      <App
        time={settings.gameTime}
        mistakes={settings.errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
