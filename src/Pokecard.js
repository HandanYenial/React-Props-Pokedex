import React from "react"
import "./Pokecard.css"
import Pokedex from "./Pokedex"

const Pokecard=({pokemons, name}) =>{
    return(
        <div className ="Pokecard">
        <h1 className="Pokecard-header">Pokemons </h1>
        <div>  
          {pokemons.map(pokemon => (
            <Pokedex name = {pokemon.name} img_url={pokemon.img_url} type = {pokemon.type} base_experience = {pokemon.base_experience} />
            
          ))}
        </div>
      
      </div>
      )

}
export default Pokecard;
