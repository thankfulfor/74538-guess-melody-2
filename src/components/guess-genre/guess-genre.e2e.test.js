import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GuessGenre} from './guess-genre';

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
  const changeHandler = jest.fn();

  const guessGenre = mount(
      <GuessGenre
        screenIndex={0}
        question={question}
        onAnswer={changeHandler}
      />
  );

  const form = guessGenre.find(`form`);
  const input = guessGenre.find({type: `checkbox`});
  input.simulate(`change`, {target: {value: `answer-0`}});
  form.simulate(`submit`);
  expect(changeHandler).toHaveBeenCalledWith([`answer-0`]);
});
