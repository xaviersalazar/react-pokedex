import PokeCard from "./components/PokeCard";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import PaginationBtn from "./components/Button/PaginationBtn";


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
        <>
            <Header />
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-7">
                    {pokemonGrid}
                </div>
                <div className="flex justify-center p-6">
                    <PaginationBtn />
                </div>
            </div>
        </>
  );
}

export default App;
