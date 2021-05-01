import React from "react";
import dex from "../../assets/images/pokedex.png";
import "./PokeDex.css";

function PokeDex() {
  const [poke, setPoke] = React.useState([]);
  const [pokeId, setPokeId] = React.useState(1);

  React.useEffect(() => {
    const fetchPokes = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const data = await response.json();
      setPoke(data);
    };
    fetchPokes();
  }, [pokeId]);

  const randomPoke = () => {
    setPokeId(Math.floor(Math.random() * (898 - 1) + 1));
    console.log(pokeId);
  };

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
          onClick={() => randomPoke()}
        />
        <img src={dex} alt="pokedex" className="pokeDex" />
      </div>
    </>
  );
}

export default PokeDex;
