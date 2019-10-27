import * as React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import {GuessArtist} from '../guess-artist/guess-artist.jsx';
import {GuessGenre} from '../guess-genre/guess-genre.jsx';

export class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {

    if (question === -1) {
      const {time, mistakes} = props;

      return <WelcomeScreen
        time={time}
        mistakes={mistakes}
        onClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return (
        <GuessGenre
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />
      );

      case `artist`: return (
        <GuessArtist
          screenIndex={question}
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />
      );
    }

    return null;
  }

  onUserAnswer(answer) {
    const {questions} = this.props;
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;

      const isEnd = nextIndex >= questions.length;
      return {
        prevState,
        question: !isEnd ? nextIndex : -1,
        answers: answer
      };
    });
  }

  constructor(props) {
    super(props);
    this.onUserAnswer = this.onUserAnswer.bind(this);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {question} = this.state;
    return App.getScreen(question, this.props, this.onUserAnswer);
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
};
