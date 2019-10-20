import * as React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';

export const App = (props) => {
  const {time, mistakes, onClick} = props;
  return (
    <WelcomeScreen
      time={time}
      mistakes={mistakes}
      onClick={onClick}
    />
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
