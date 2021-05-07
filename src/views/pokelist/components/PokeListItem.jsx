import React from "react";
import "./PokeListItem.css";

const PokeListItem = ({ pokemon }) => {
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
};

export default PokeListItem;
