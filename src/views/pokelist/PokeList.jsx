import React from "react";
import listDex from "../../assets/images/pokedexList.png";
import "./PokeList.css";
import PokeListItem from "./components/PokeListItem";

function PokeList() {
  return (
    <div className="listFrame">
      <img src={listDex} alt="pokelist" className="listDex" />
      <div className="listContainer">
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
        <PokeListItem />
      </div>
    </div>
  );
}

export default PokeList;
