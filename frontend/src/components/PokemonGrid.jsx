import PokeCard from "./Card/PokeCard";

const PokemonGrid = (props) => {

    const pokemonGrid = props.pokemonData?.results?.map(poke => <PokeCard
        key={poke.name}
        name={poke.name}
        url={poke.url}/>)

    return (
        <div className="flex flex-wrap justify-center gap-7">
            {pokemonGrid}
        </div>

    )
}
export default PokemonGrid