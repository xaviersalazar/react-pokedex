import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

const URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonInfo();
  }, []);

  const getPokemonInfo = async () => {
    fetch(`${URL}?limit=30&offset=0`)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          console.log(response);
          setPokemonInfo(response);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4">
        pokedex<span className="text-red-500">.</span>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-y-8 md:gap-x-8 lg:gap-x-12 mt-12 px-12 lg:px-24">
          {pokemonInfo &&
            pokemonInfo.results.map((result) => (
              <PokemonCard
                key={result.name}
                url={result.url}
                name={result.name}
              />
            ))}
        </div>
      </h1>
    </div>
  );
}

export default App;
