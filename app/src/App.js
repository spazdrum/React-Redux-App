import React from "react";
import logo from "./logo.svg";
import "./App.css";
import characterList from "./components/characterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty</h1>
        <characterList />
      </header>
    </div>
  );
}

export default App;
