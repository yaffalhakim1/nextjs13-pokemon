import PokemonTable from "./pokemonTable";
import { store } from "@/store";

function SSRPokemonTable() {
  return <PokemonTable pokemon={store.getState().search.startupPokemon} />;
}
export default SSRPokemonTable;
