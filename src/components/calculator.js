
import React from 'react';

const INIT_NUMBER = 0;

const App = (props) => {
  const [counter, setCounter] = React.useState(INIT_NUMBER);


const incCounter = () => {
   if (counter < 50) {
     setCounter(counter => counter + 1)
   }
 }
 const decCounter = () => {
    if(counter > -50) {
      setCounter(counter => counter -1)
    }
  }
 const rndCounter = () => {
    setCounter( + (Math.random() * 100 - 50).toFixed(0))
  }
 const rstCounter = () => {
    setCounter(INIT_NUMBER)
  }

    return (
      <div class="app">
        <div class="counter">{counter}</div>
        <div class="controls">
          <button onClick={incCounter}>INC</button>
          <button onClick={decCounter}>DEC</button>
          <button onClick={rndCounter}>RND</button>
          <button onClick={rstCounter}>RESET</button>
        </div>
      </div>
    )}

ReactDOM.render(<App />, document.getElementById('app'));
