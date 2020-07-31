import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./components/characterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty</h1>
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
