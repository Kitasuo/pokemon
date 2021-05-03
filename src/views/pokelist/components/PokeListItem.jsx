import React from "react";
import "./PokeListItem.css";

function PokeListItem() {
  return (
    <div className="listBox">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png"
        alt="pokeman"
        className="listSprite"
      />
      <div className="listName">Pokomon</div>
      <div className="listName">001</div>
    </div>
  );
}

export default PokeListItem;
