import React, { useState, useEffect } from 'react';
import { variables } from './Variables.js';

export function AskQuestion() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const apiEndpoint = "http://" + window.location.hostname + ":5048/UseChatGPT/";

  useEffect(() => {
    fetch(apiEndpoint + "?query=" + inputText)
      .then(response => response.json())
      .then(data => {
        setResponse(data);
      })
      .catch(error => console.error(error));
  }, [apiEndpoint, inputText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(apiEndpoint + "?query=" + inputText)
      .then(response => response.json())
      .then(data => {
        setResponse(data);
      })
      .catch(error => console.error(error));
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
