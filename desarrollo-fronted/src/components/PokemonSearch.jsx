import React, { useState, useEffect } from "react";
import { PokemonForm } from "./PokemonForm.jsx";
import { PokemonDetails } from "./PokemonDetails.jsx";
import { HelpHttp } from "../helpers/HelpHttp.jsx";
import { Loader } from "./Loader.jsx";

export const PokemonSearch = () => {
  const [search, setSearch] = useState(null);
  const [type, setType] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { Pokemon, Type  } = search;

      let pokemonUrl = `http://localhost:3000/pokemon/name/${Pokemon}`;
      let rarityUrl = `http://localhost:3000/pokemon/rarity/${Pokemon}`;
      let typeUrl = `http://localhost:3000/pokemon/type/${Pokemon}/`;
      let locationUrl = `http://localhost:3000/pokemon/location/${Pokemon}/`;

      // console.log(pokemonUrl, typeUrl, speciesUrl);

      // Se activa el loading
      setLoading(true);

      try {
        const [pokemonRes, typeRes, rarityRes, locationRes] = await Promise.all([
        HelpHttp().get(pokemonUrl),
        HelpHttp().get(typeUrl),
        HelpHttp().get(rarityUrl),
        HelpHttp().get(locationUrl),
      ]);

      // console.log(pokemonRes, typeRes, speciesRes);
      // console.log(typeRes);

      setPokemon(pokemonRes[0]);
      setType(typeRes[0]);
      setRarity(rarityRes[0]);
      setLocation(locationRes)
    } catch (error) {
      console.error( "Error al obtener datos", error)
    } finally {
      setLoading(false);
      // Fin de la peticion del useEffect
      }
    };

    // se llama al fetch Data de nuevo y este se volvera a ejecutar en el momento en que el :search: cambie.
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Pokemon Search</h2>
      <article className="grid-1-3">
        <PokemonForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <PokemonDetails
            search={search}
            type={type}
            pokemon={pokemon}
            rarity={rarity}
            location={location}
          />
        )}
      </article>
    </div>
  );
};
