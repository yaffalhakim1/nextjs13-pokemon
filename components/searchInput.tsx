"use client";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { setSearch } from "@/store/searchSlice";
import { RootState, AppDispatch } from "@/store";
import PokemonTable from "./pokemonTable";
import { pokemonApi } from "@/store/pokemonAPI";
import { Pokemon } from "@/types";
import { useEffect } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPokemon = useAppSelector((state) => state.search.startupPokemon);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <PokemonTable pokemon={search.length ? data ?? [] : startupPokemon} />
    </div>
  );
};

export default SearchInput;
