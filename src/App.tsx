import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  class Foo<T> {
    info: T | undefined
    setInfo(newInfo: T) {
      this.info = newInfo
    }
  }
  const f1: Foo<string> = new Foo()
  f1.setInfo('x')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.llll
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
