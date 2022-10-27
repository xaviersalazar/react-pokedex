import {useEffect, useState} from "react";
import ModalBtn from "../Button/ModalBtn";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setPokemon(prevState => data))
    }, [])

    const getStats = () => {
        return (
            pokemon?.stats?.map(item =>
                <div key={item.stat.name} className="grid grid-cols-2">
                    <p className="text-sm text-black">{item.stat.name}</p>
                    <p className="text-sm">{item.base_stat}</p>
                </div>
            )
        )
    }
    const getType = () => pokemon?.types.map(type => <div className="badge badge-secondary text-xs" key={type.type.name}>{type.type.name}</div>)

    return (
        pokemon && (
            <div className="card w-80 shadow-xl border border-gray-100">

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title capitalize text-black">{props.name}</h2>
                        <div className="flex justify-end gap-x-1 font-bold">{getType()}</div>
                    </div>
                    <figure className="border-2 rounded-md bg-gradient-to-r from-white via-blue-250 to-blue-500 h-32 my-4">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={props.name} className="max-h-36"   />
                    </figure>

                    {getStats()}

                    <div className="card-actions justify-end">
                        <ModalBtn id={pokemon.id} pokemon={pokemon} />
                    </div>
                </div>
            </div>
        )
    )
}

export default PokeCard