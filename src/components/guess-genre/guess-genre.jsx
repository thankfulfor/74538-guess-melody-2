import * as React from 'react';
import PropTypes from 'prop-types';

export class GuessGenre extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.onCheckboxChangeHandler = this.onCheckboxChangeHandler.bind(this);
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

  onCheckboxChangeHandler() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
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
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <button className="track__button track__button--play" type="button" />
                  <div className="track__status">
                    <audio />
                  </div>
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      checked={this.state.isChecked}
                      value={`answer-${i}`}
                      onChange={this.onCheckboxChangeHandler}
                      id={`answer-${i}`} />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
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
