export const questions = [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: `id1`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`,
        genre: `rock`,
      },
      {
        id: `id2`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`,
        genre: `pop`,
      },
      {
        id: `id3`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`,
        genre: `jazz`,
      },
      {
        id: `id4`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg/Ugandan_national_anthem,_performed_by_the_U.S._Navy_Band.ogg.mp3`,
        genre: `rock`,
      },
    ],
  }
];

export const settings = {
  gameTime: 5,
  errorCount: 3,
};
