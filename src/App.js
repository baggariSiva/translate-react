import { useState } from 'react';
import './App.css';
import DisplayTranslated from './component/Translator/index';

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Translator (English to Hindi)</h1>
      <div className="container">
        <form>
          <span className="box-title">Enter Text:</span>
          <textarea value={text} onChange={handleChange} cols={10} rows={10} />
        </form>
        <DisplayTranslated text={text} />
      </div>
    </div>
  );
}

export default App;
