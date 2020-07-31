import React from "react";
import "./App.css";
import characterCard from "./components/characterCard";
import characterList from "./components/characterList";

function App() {
  return (
    <div className="App">
      <characterList />
      <characterCard />
    </div>
  );
}

export default App;
