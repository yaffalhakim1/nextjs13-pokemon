"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { Pokemon } from "@/types";

function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  const isLoaded = useRef(false);

  if (!isLoaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    isLoaded.current = true;
  }
  return null;
}

export default Preloader;
