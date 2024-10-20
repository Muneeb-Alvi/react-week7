import React from "react";
import FootballResults from "./components/FootballFixtures";
import BasketballResults from "./components/BasketballFixtures";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <h1>Sports Results</h1>
      <div className='sports-container'>
        <FootballResults />
        <BasketballResults />
      </div>
    </div>
  );
}

export default App;
