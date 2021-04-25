import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CleanUp } from "./components/CleanUp";


const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text");
  const [input, setInput] = useState()
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onClickText = () => {
    setStatus(1)
  }
  const onChangeHandler = (event: any) => { 
    setInput(event.target.value)
  }
  const onClickDisplay = () => { 
    setDisplay(!display)
  }

  useEffect(() => { 
    console.log("コンソールに流れてるよ〜")
    document.title = `カウント${counter}`
  }, [counter])

  return (
    <div className="App">
      <h4>{status}</h4>
      <br />
      <button onClick={onClickText}>ボタン</button>
      <br />
      <input type="text" value={input} onChange={onChangeHandler} />
      <h4>{input}</h4>
      <br />
      <h4>{counter}</h4>
      <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
        増やす
      </button>
      <br />
      { display && < CleanUp />}
      <button onClick={onClickDisplay}>表示/非表示</button>
    </div>
  );
}

export default App;