import { Inter } from "next/font/google";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import SSRPokemonTable from "@/components/SSRPokemonTable";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SSRPokemonTable />
    </main>
  );
}
