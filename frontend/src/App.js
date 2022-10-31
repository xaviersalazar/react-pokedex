import { useState, useEffect } from 'react';
import Header from "./components/Header";
import PaginationBtn from "./components/Button/PaginationBtn";
import PokemonGrid from "./components/PokemonGrid";


function App() {
    const [pokemonData, setPokemonData] = useState(null)
    const [offsetPage, setOffsetPage] = useState(0)
    const nextPagination = () => setOffsetPage(prevState => prevState + 30)
    const prevPagination = () => setOffsetPage(prevState => prevState - 30)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetPage}`)
            .then(res => res.json())
            .then(data => setPokemonData(prevState => data))
    }, [offsetPage])
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <PokemonGrid pokemonData={pokemonData} />
                <PaginationBtn nextPagination={nextPagination} prevPagination={prevPagination} offsetPage={offsetPage} />
            </div>
        </>
  );
}
export default App;
