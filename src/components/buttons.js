import React from 'react';
import PropTypes from 'prop-types';

function CalcButton({
  buttonName, onClick, calcObj, classButton,
}) {
  return (
    <button type="button" className={classButton} onClick={() => onClick(calcObj, buttonName)}>{buttonName}</button>
  );
}

CalcButton.defaultProps = {
  buttonName: '?',
  classButton: 'btn',
};

CalcButton.propTypes = {
  buttonName: PropTypes.string,
  classButton: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  calcObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CalcButton;
