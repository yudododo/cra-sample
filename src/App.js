import { useEffect, useState } from "react";
import axios from "axios";
//外部套件

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';

function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (e) =>{
    setText(e.target.value);
  }
  useEffect(() =>{
    (async() => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, assumenda.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <Input id="sampleText" text="這是一個input" value={text} onChangeHandler={onChangeHandler}></Input>
        {text}
      </header>
    </div>
  );
}

export default App;
