import { Pokemon } from "@/types";

const PokemonTable = ({ pokemon }: { pokemon: Pokemon[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PokemonTable;
