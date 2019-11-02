import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GuessGenre} from './guess-genre';

/**
 * @jest-environment jsdom
 */

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rock`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    }
  ],
};

it(`Компонент GuessGenre корректно обрабатывает onAnswer`, () => {
  const formSubmitHandler = jest.fn();
  const container = document.createElement(`div`);
  ReactDOM.render(
      <GuessGenre
        screenIndex={0}
        question={question}
        onAnswer={formSubmitHandler}
      />, container
  );

  const form = container.querySelector(`form`);
  const {answer} = form.elements;
  answer.value = `answer-0`;
  answer.dispatchEvent(new window.Event(`click`));
  form.dispatchEvent(new window.Event(`submit`));
  expect(formSubmitHandler).toHaveBeenCalledWith([`answer-0`]);
});
