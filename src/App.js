import './App.css';
import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">かぼすクイズ</h1>
      </header>
      <div className="main">
        <Board />
      </div>
      
    </div>
  );
}

export default App;
