import { Message } from "./Message";
import { PokemonName } from "./PokemonName.jsx";
import { PokemonRarity } from "./PokemonRarity.jsx";
import { PokemonLocation } from "./PokemonLocation.jsx";

export const PokemonDetails = ({ search, type, pokemon, rarity, location }) => {
  return (
    <>
      {pokemon?.pokemon_name ? (
        <>
          <PokemonName pokemon={pokemon} type={type} />
          <PokemonRarity rarity={rarity} />
          <PokemonLocation location={location}/>
        </>
      ) : (
        <Message
          msg={`Error: "${search.Pokemon}" No es un pokemon o quizas esta mal escrito.`}
          bgColor="#f00"
        />
      )}
    </>
  );
};


/* {pokemon.name ? (
  <>
    <PokemonName pokemon={pokemon} />
    <PokemonRarity rarity={rarity} />
    <PokemonLocation location={location}/>
    {type.error || type.err || type.name === "AbortError" ? (
      <Message
        msg={`Error: No existe el tipo de Pokemon "<em>${search.Type}</em>"`}
        bgColor="#f00"
      />
    ) : (
      <PokemonType type={type.name} />
    )}
  </>
) : (
  <Message
    msg={`Error: " ${search.Pokemon} " No es un pokemon o está mal escrito`}
    bgColor="#f00"
  />
)}
 */
