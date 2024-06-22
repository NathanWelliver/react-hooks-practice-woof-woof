import React from "react";
import { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [selectedPupper, setSelectedPupper] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => setAllDogs(data))
    .catch(error => console.log(error))
  }, []);

function handleSelectDog(dog){
  setSelectedPupper(dog);
}

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar doggos={allDogs} onSelectDog={handleSelectDog}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dog={selectedPupper}/>
        </div>
      </div>
    </div>
  );
}

export default App;
