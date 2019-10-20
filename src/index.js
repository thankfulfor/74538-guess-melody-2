import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };
  const onClick = function () {};
  ReactDOM.render(
      <App
        time={settings.gameTime}
        mistakes={settings.errorCount}
        onClick={onClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
