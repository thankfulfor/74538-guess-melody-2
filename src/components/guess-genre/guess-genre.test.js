import React from 'react';
import renderer from 'react-test-renderer';
import {GuessGenre} from './guess-genre';

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

it(`GuessGenre корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(<GuessGenre
      screenIndex={0}
      question={question}
      onAnswer={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
