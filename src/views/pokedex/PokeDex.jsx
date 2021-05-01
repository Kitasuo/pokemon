import React from "react";
import dex from "../../assets/images/pokedex.png";
import "./PokeDex.css";

function PokeDex() {
  const [poke, setPoke] = React.useState([]);

  const fetchPokes = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const data = await response.json();
    setPoke(data);
  };
  React.useEffect(() => {
    fetchPokes();
  }, []);

  console.log(poke);

  return (
    <>
      <div className="header">Gotta click 'em all!</div>
      <div className="frame">
        <div className="name">{poke.name}</div>
        <div className="number">{poke.id}</div>
        <img
          src={poke.sprites && poke.sprites.front_default}
          alt="pokemon"
          className="sprite"
        />
        <img src={dex} alt="pokedex" className="pokeDex" />
      </div>
    </>
  );
}

export default PokeDex;
