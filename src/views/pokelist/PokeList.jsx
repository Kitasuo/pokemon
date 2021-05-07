import React from "react";
import listDex from "../../assets/images/pokedexList.png";
import "./PokeList.css";
import PokeListItem from "./components/PokeListItem";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const PokeList = () => {
  const [caughtPokemons] = useLocalStorage("pokeDexCaught", []);

  caughtPokemons.sort((a, b) => a.id - b.id);

  return (
    <div className="listFrame">
      <Link to="/">
        <div className="listLink"></div>
      </Link>
      <img src={listDex} alt="pokelist" className="listDex" />
      <div className="listContainer">
        {caughtPokemons.map((pokemon) => (
          <PokeListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokeList;
