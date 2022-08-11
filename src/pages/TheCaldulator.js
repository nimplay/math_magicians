/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from '../components/Calculator';

class TheCalculator extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>Lets do some math!</h3>
        <Calculator />
      </div>
    );
  }
}
export default TheCalculator;
