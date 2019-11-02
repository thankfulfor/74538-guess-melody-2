import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AudioPlayer} from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`;

it(`При нажатии на «Воспроизведение» у компонента изменится состояние на «воспроизведение», а повторный клик изменит состояние на «пауза».`, () => {
  const clickHandler = jest.fn();

  const player = mount(
      <AudioPlayer
        isPlaying={false}
        src={src}
        onPlayButtonClick={clickHandler}
      />
  );
  player.setState({isLoading: false});
  const playButton = player.find(`.track__button`);
  playButton.simulate(`click`);
  expect(player.state().isPlaying).toEqual(true);
  playButton.simulate(`click`);
  expect(player.state().isPlaying).toEqual(false);
});
