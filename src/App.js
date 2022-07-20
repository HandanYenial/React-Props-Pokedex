import React from "react";
import pokemons from "./pokemons";

import './App.css';
import Pokecard from './Pokecard.js';

function App() {
return(
  <Pokecard pokemons = {pokemons} name= "My Pokemon"/>
)
}

export default App;
