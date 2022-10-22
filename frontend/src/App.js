import PokeCard from "./components/PokeCard";
import { useState, useEffect } from 'react';


function App() {

    //use state for all pokemon
    const [pokemonData, setPokemonData] = useState(null)

    //use effect for fetch call
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0')
            .then(res => res.json())
            .then(data => setPokemonData(prevState => data))
    }, [])

    const pokemonGrid = pokemonData?.results?.map(poke => <PokeCard
        key={poke.name}
        name={poke.name}
        url={poke.url}/>)


    return (
    <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">
        Pokedex.
        </h1>
        <div className="flex flex-wrap justify-center gap-7">
            {pokemonGrid}
        </div>
    </div>
  );
}

export default App;
