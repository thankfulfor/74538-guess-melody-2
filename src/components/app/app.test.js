import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

it(`App корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(<App
      mistakes={0}
      time={0}
      onClick={clickHandler}
    />)
.toJSON();
  expect(tree).toMatchSnapshot();
});
