import { useEffect, useState } from "react";
const urlInitial = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [link, setLink] = useState("");
  const [more, setMore] = useState(true);

  const getApi = async (url = urlInitial) => {
    //Llamado a la API que brinda la paginacion de los pokemones
    const response = await fetch(url);
    const data = await response.json();

    //Destructuracion de los datos paginados
    //next => siguiente url con mas datos paginados
    //results => urls con los pokemones paginados

    const { next, results } = data;

    //Son varias url
    const listPokemons = await Promise.all(
      results.map(async (value) => {
        //Value conyti
        const responsePokemon = await fetch(value.url);

        //DATOS DEL POKEMON
        const dataPokemon = await responsePokemon.json();

        return {
          name: dataPokemon.name,
          id: dataPokemon.id,
          types: dataPokemon.types,
          hp: dataPokemon.stats[0].base_stat,
          atk: dataPokemon.stats[1].base_stat,
          def: dataPokemon.stats[2].base_stat,
          img: dataPokemon.sprites.other["official-artwork"].front_default,
        };
      })
    );

    return { next, listPokemons };
  };

  const getPokemon = async () => {
    const { next, listPokemons } = await getApi();
    setLink(next);
    setPokemons(listPokemons);
  };

  const morePokemons = async () => {
    //LIMIT 500 POKEMONES
    if (link.includes("offset=500")) {
      setMore(false);
      return;
    }
    const { next, listPokemons } = await getApi(link);
    setPokemons((prev) => [...prev, ...listPokemons]);
    next === null && setMore(false); //Por si ya no encuentra
    setLink(next);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return { morePokemons, pokemons, more };
};
