import React from "react";
import listDex from "../../assets/images/pokedexList.png";
import "./PokeList.css";
import PokeListItem from "./components/PokeListItem";
import { Link } from "react-router-dom";

function PokeList() {
  // Returns array of values in localstorage
  var arrayOfValues = Object.values(localStorage);
  // Parse each item of list from string to obj
  var pokemonList = arrayOfValues.map((obj) => {
    let rObj = JSON.parse(obj);
    return rObj;
  });

  return (
    <div className="listFrame">
      <Link to="/">
        <div className="listLink"></div>
      </Link>
      <img src={listDex} alt="pokelist" className="listDex" />
      <div className="listContainer">
        {pokemonList.map((pokemon) => (
          <PokeListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokeList;
