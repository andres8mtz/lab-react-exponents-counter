import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App () {
  const [counter, setCounter] = useState(0);
  const [exponentValue, setExponentValue] = useState(2);
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter counter={counter} setCounter={setCounter}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent counter={counter} exponentValue={exponentValue}/>
        <ExponentTwo counter={counter} exponentValue={exponentValue}/>
        <ExponentThree counter={counter} exponentValue={exponentValue}/>
        <ExponentFour counter={counter} exponentValue={exponentValue}/>
        <ExponentFive counter={counter} exponentValue={exponentValue}/>
        <ExponentSix counter={counter} exponentValue={exponentValue}/>
      </div>
    </div>
  );
}

export default App;