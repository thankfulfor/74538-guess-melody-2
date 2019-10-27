import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {settings} from './mocks/questions.js';
import {questions} from './mocks/questions.js';

const init = () => {
  const onClick = function () {};
  ReactDOM.render(
      <App
        time={settings.gameTime}
        mistakes={settings.errorCount}
        onClick={onClick}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
