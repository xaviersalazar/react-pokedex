import {useEffect, useState} from "react";
import ModalBtn from "../Button/ModalBtn";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState(null)

    const getStats = () => pokemon?.stats?.map(item =>
        <div key={item.stat.name} className="text-xs">
            <p className="text-black dark:text-slate-400">{item.stat.name} <span className="text-primary dark:text-info text-sm">{item.base_stat}</span></p>
        </div>)

    const getType = () => pokemon?.types.map(type => <div key={type.type.name} className={`badge badge-secondary text-xs`}>{type.type.name}</div>)

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setPokemon(prevState => data))
    }, [])

    return (
        pokemon && (
            <div className="card w-80 shadow-xl border border-gray-100 dark:border-slate-700">

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title capitalize text-black dark:text-slate-300">{props.name}</h2>
                        <div className="flex justify-end gap-x-1 font-bold">{getType()}</div>
                    </div>
                    <figure className="border-2 dark:border-slate-600 rounded-md h-32 my-4
                    bg-gradient-to-r from-white via-blue-250 to-blue-500
                    ">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={props.name} className="max-h-36"   />
                    </figure>

                    <div className="grid grid-cols-2 justify-center">
                        {getStats()}
                    </div>

                    <div className="card-actions justify-end">
                        <ModalBtn
                            id={pokemon.id}
                            pokemon={pokemon}
                            pokemonName={props.name}
                            getType={getType()}
                        />
                    </div>
                </div>
            </div>
        )
    )
}

export default PokeCard