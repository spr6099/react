import './app.css';

import {useState} from 'react'
import Counter from './Counter';

function App() {
  const [count,setCount]=useState(0)
const addCount=() => {
    setCount(count+1);
    console.log(count);
}
  return  <> 
  <div className="App">
    <button onClick={addCount}>add</button>
    <Counter count={count}/>
    </div>
    </>
  }

export default App;
