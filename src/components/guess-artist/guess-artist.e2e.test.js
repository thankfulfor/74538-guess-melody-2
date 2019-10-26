import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GuessArtist} from './guess-artist';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  answers: [
    {
      picture: `http://placehold.it/134x134`,
      artist: `John Snow`,
    }
  ],
};

it(`Компонент GuessArtist корректно обрабатывает onAnswer`, () => {
  const changeHandler = jest.fn();

  const guessArtist = mount(
      <GuessArtist
        screenIndex={0}
        question={question}
        onAnswer={changeHandler}
      />
  );

  const answerInput = guessArtist.find(`input`);
  answerInput.simulate(`change`);
  expect(changeHandler).toHaveBeenCalledWith(`answer-0`);
});
