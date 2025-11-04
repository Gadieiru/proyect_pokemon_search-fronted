export const PokemonName = ({ pokemon, type }) => {
  return (
    <section>
      <h3>
        Nombre del Pokemon: <>{pokemon.pokemon_name.toUpperCase()}</>
      </h3>
      <h3>Pokemon de tipo: <strong>{type.type_name}</strong></h3>
      <section>
        <h3>Breve descripcion:</h3>
        <p>{pokemon.description}</p>
      </section>
       <img src={`http://localhost:3000/${pokemon.pokemon_img}`} alt={pokemon}/>
      <h3>
        El rango de captura de este pokemon es de un: {pokemon.capture_rate}%
      </h3>
      <h3>Felicidad base al encontrarlo: <strong>{pokemon.initial_happiness}%</strong></h3>
    </section>
  );
};


