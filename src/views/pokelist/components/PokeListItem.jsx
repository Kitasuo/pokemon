import React from "react";
import "./PokeListItem.css";

function PokeListItem({ pokemon }) {
  // console.log(pokemon.name);
  return (
    <div className="listBox">
      <img
        src={pokemon.sprites.front_default}
        alt="pokeman"
        className="listSprite"
      />
      <div className="listName">{pokemon.name}</div>
      <div className="listName">{pokemon.id}</div>
    </div>
  );
}

export default PokeListItem;
