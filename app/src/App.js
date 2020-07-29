import React from "react";
import logo from "./logo.svg";
import "./App.css";
import characterCard from "./components/characterCard";
import characterList from "./components/characterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty</h1>
        <characterCard />
        <br />
        <characterList />
      </header>
    </div>
  );
}

export default App;
