import React, { useState } from 'react';
import './App.css';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const getApiMessage = async () => {

    console.log(process.env.REACT_APP_API_GATEWAY_URL);
    const response = await fetch(`${process.env.REACT_APP_API_GATEWAY_URL}hello`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };


  return (
      <div className="App">
        <header className="App-header">
          <h1>CALL AN API</h1>
          <button onClick={getApiMessage}>Call Lambda</button>
          <div>
            {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
          </div>
        </header>
      </div>
  );
}

export default App;