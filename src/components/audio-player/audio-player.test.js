import React from 'react';
import renderer from 'react-test-renderer';
import {AudioPlayer} from './audio-player.jsx';

const createNodeMock = (element) => {
  return element.type === `audio` ? {} : null;
};

it(`AudioPlayer корректно рендерится после перезапуска`, () => {
  const clickHandler = function () {};
  const options = {createNodeMock};
  const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`;
  const player = renderer
  .create(
      <AudioPlayer
        src={src}
        isPlaying={false}
        onPlayButtonClick={clickHandler}
      />, options
  )
  .toJSON();
  expect(player).toMatchSnapshot();
});
