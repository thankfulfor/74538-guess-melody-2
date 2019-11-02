import * as React from 'react';
import PropTypes from 'prop-types';
import {AudioPlayer} from '../audio-player/audio-player.jsx';

export class GuessGenre extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkedCheckboxes: [],
      activePlayer: -1,
    };
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler(evt) {
    evt.preventDefault();

    const {onAnswer} = this.props;

    const checkboxes = evt.target.getElementsByClassName(`game__input`);
    const checkedCheckboxes = [...checkboxes].filter((checkbox) => {
      return checkbox.checked;
    });
    const answers = checkedCheckboxes.map((checkedCheckbox) => {
      return checkedCheckbox.value;
    });
    onAnswer(answers);
  }

  render() {
    const circleStyle = {
      filter: `url(#blur)`,
      transform: `rotate(-90deg) scaleY(-1)`,
      transformOrigin: `center`,
    };

    const {question, screenIndex} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={circleStyle} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this.formSubmitHandler}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${it.id}`} className="track">
                  <AudioPlayer
                    src={it.src}
                    isPlaying={i === this.state.activePlayer}
                    onPlayButtonClick={() => this.setState({
                      activePlayer: this.state.activePlayer === i ? -1 : i
                    })}
                  />
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${i}`}
                      id={i} />
                    <label className="game__check" htmlFor={i}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};
