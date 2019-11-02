import React from 'react';
import renderer from 'react-test-renderer';
import {GuessArtist} from './guess-artist';

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

it(`GuessArtist корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const tree = renderer
    .create(<GuessArtist
      screenIndex={0}
      question={question}
      onAnswer={clickHandler}
    />, {createNodeMock: (el) => el})
    .toJSON();
  expect(tree).toMatchSnapshot();
});
