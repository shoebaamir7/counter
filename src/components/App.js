import React, {useState} from 'react';
import classes from './App.module.css';

function App() {
  const [counter, setCounter] = useState(45);

  return (
    <div className={classes.App}>
      <div className={classes.Main}>
      <button onClick={ () => setCounter(counter-1)} className={classes.myButton}>Decrement</button>
        <span>{counter}</span>
        <button onClick={ () => setCounter(counter+1)} className={classes.myButton}>Increment</button>
      </div>
    </div>
  );
}

export default App;
