import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Компонент WelcomeScreen корректно обрабатывает onClick`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    mistakes={0}
    time={0}
    onClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
