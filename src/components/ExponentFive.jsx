const ExponentFive = ({counter}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{counter}⁵</p>
    <p className="exponent-result">{counter} * {counter} * {counter} * {counter} * {counter} = <span className="total">{Math.pow(counter, 5)}</span></p>
  </div>
);

export default ExponentFive;