import React from "react";
import dex from "../../assets/images/pokedex.png";
import "./PokeDex.css";

function PokeDex() {
  return (
    <>
      <div className="header">Gotta click 'em all!</div>
      <div className="frame">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="pokemon"
          className="sprite"
        />
        <img src={dex} alt="pokedex" className="pokeDex" />
      </div>
    </>
  );
}

export default PokeDex;
