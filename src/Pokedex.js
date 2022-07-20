import React from "react";
import "./Pokedex.css";

const Pokedex = ({name, type, base_experience, img_url}) => (
    <div className = "Pokedex" style={{border: "2px black solid"}}>
    <h4 className = "Pokedex-title"> { name }</h4>
    <img src= {img_url} alt='' width= '200px'/>
    <ul >
      <li style={{ color: "magenta" }}> BaseExperience  : {base_experience} </li>
      <li> Type : {type} </li>
    </ul>
    </div>

);

export default Pokedex;