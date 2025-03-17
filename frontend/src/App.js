// src/App.js
import React from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenAI Chat Application</h1>
      </header>
      <main>
        <ChatInterface />
      </main>
      <footer>
        <p>Built with React and OpenAI</p>
      </footer>
    </div>
  );
}

export default App;