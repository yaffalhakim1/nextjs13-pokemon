import { Inter } from "next/font/google";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

import SearchInput from "@/components/searchInput";
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
