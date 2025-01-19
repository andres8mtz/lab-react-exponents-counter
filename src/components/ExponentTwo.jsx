import React from "react";

const ExponentTwo = ({counter}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{counter}²</p>
    <p className="exponent-result">{counter} * {counter} = <span className="total">{Math.pow(counter, 2)}</span></p>
  </div>
);

export default ExponentTwo;