import React, { useState } from 'react';
import '../src/chat.css'

export function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };
  const handleReset = () => {
    setMessage('');
  };
  return (
    <div className="App">
      <h2>Ask Any Qustion about University of Colombo  </h2>
      <form onSubmit={handleSubmit}>
      <div class="form-group">
        <textarea 
          value={message}
          placeholder="Ask Anything"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        </div>
        
        <input class="btn btn-primary" type="submit" value="Submit"></input>
        <input class="btn btn-primary" type="button" value="Reset" onClick={handleReset} />

        
      </form>
      {response && <div>{response}</div>}
    </div>
  );
}
