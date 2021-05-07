import React from "react";
import dex from "../../assets/images/pokedex.png";
import "./PokeDex.css";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { reducer } from "./reducer";

const defaultState = {
  pokeId: 1,
  wobble: 0,
};

function PokeDex() {
  const [poke, setPoke] = React.useState(null);
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const [caughtPokemons, setCaughtPokemons] = useLocalStorage(
    "pokeDexCaught",
    []
  );

  React.useEffect(() => {
    const fetchPokes = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${state.pokeId}`
      );
      const data = await response.json();
      setPoke(data);
    };
    fetchPokes();
  }, [state.pokeId]);

  const randomPoke = () => {
    if (Math.random() > 0.05) {
      dispatch({ type: "APPLY_WOBBLE" });
    } else {
      setCaughtPokemons([...caughtPokemons, poke]);
      dispatch({ type: "CHANGE_POKEID" });
    }
  };

  return (
    <>
      <div className="header">Gotta click 'em all!</div>
      <div className="frame">
        <Link to="/list">
          <div className="link"></div>
        </Link>
        <div className="name">{poke?.name ?? ""}</div>
        <div className="number">{poke?.id ?? ""}</div>
        <img
          src={poke?.sprites.front_default ?? ""}
          alt="pokemon"
          className="sprite"
          onClick={() => randomPoke()}
          onAnimationEnd={() => dispatch({ type: "REMOVE_WOBBLE" })}
          wobble={state.wobble}
        />
        <img src={dex} alt="pokedex" className="pokeDex" />
      </div>
    </>
  );
}

export default PokeDex;
