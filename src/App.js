import React, {useState} from 'react';
import "./styles/App.css";
import randomQuote from "./Components/quote.jsx";

function App() {
  const [quote, setQuote] = useState(randomQuote);
  const [color, setColor] = useState(set_background_color);
  function printQuote() {
    setColor(set_background_color);
    setQuote(randomQuote);
  }
  
  function rand() {
    return Math.floor(Math.random() * 256);
  }
  
  function set_background_color() {
      document.body.style.backgroundColor =
      "rgb(" + rand() + "," + rand() + "," + rand() + ")";
  }
  
  return (
    <main style={{backgroundColor: {color}}}>
      <div id="wrapper" className="App">
        <div id="quote-box">
          <p id="text"><i className="fa fa-quote-left"></i> {quote[0]}</p>
          <p id="author">-{quote[1]}</p>
        </div>
        <div className="buttons">
          <a  id="tweet-quote" target="_top" href="twitter.com/intent/tweet"><i id="twitter" className="fa fa-twitter"></i></a>
          <button id="new-quote" onClick={printQuote}>New quote</button>
        </div>
      </div>
    </main>
  );
}

export default App;
