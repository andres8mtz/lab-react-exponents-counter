const ExponentThree = ({counter}) => (
  <div className="exponent-counter-container">
   <p className="exponent-label">{counter}³</p>
   <p className="exponent-result">{counter} * {counter} * {counter} = <span className="total">{Math.pow(counter, 3)}</span></p>
 </div>
);

export default ExponentThree;