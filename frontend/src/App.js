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

    console.log(pokemonData);
    const pokemonElements = pokemonData?.results?.map(poke => <PokeCard key={poke.name} name={poke.name} url={poke.url}/>)


    return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
        Pokedex.
        </h1>
        {pokemonElements}
    </div>
  );
}

export default App;
