// refactoring: all other components can be removed and only this one used

const Exponent = ({counter, exponentValue}) => {
    let calcVal = counter>2?counter:exponentValue;
    let x = " * " +counter;
    return (
     <div className="exponent-counter-container">
         <p className="exponent-label">{counter} <sup>{calcVal}</sup> </p>
         <p className="exponent-result">{counter}{Array(calcVal).join(x)} = <span className="total">{Math.pow(counter, calcVal)}</span></p>
     </div>
    )
 };
 
 export default Exponent;