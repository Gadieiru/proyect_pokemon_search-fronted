import React from "react";

export const PokemonRarity = ({ rarity }) => {
  // console.log(rarity);
  return (
    <div>
      <section>
        <h3>La rareza de este pokemon es de nivel: {rarity.rarity_name} </h3>
        <p>Si te esfuerzas podrias lograr atraparlo!!!</p>
      </section>
    </div>
  );
};
