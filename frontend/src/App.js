import PokeCard from "./components/Card/PokeCard";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import PaginationBtn from "./components/Button/PaginationBtn";


function App() {

    const [pokemonData, setPokemonData] = useState(null)
    const [offsetPage, setOffsetPage] = useState(0)


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetPage}`)
            .then(res => res.json())
            .then(data => setPokemonData(prevState => data))
    }, [offsetPage])

    const pokemonGrid = pokemonData?.results?.map(poke => <PokeCard
        key={poke.name}
        name={poke.name}
        url={poke.url}/>)

    const nextPage = () => setOffsetPage(prevState => prevState + 30)
    const prevPage = () => setOffsetPage(prevState => prevState - 30)


    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-7">
                    {pokemonGrid}
                </div>
                <div className="flex justify-center p-6">
                    <PaginationBtn nextPage={nextPage} prevPage={prevPage} offsetPage={offsetPage} />
                </div>
            </div>
        </>
  );
}

export default App;
