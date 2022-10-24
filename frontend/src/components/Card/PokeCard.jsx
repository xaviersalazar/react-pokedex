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
                <p key={item.stat.name}>{item.stat.name} {item.base_stat}</p>
            )
        )
    }
    const getType = () => {
        return pokemon?.types[0]?.type.name
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl border-8 border-amber-200">

            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{props.name}</h2>
                    <div className="badge badge-secondary">{getType()}</div>
                </div>
                <figure className="border-2 rounded-md bg-gradient-to-r from-white via-blue-250 to-blue-500">
                    <img src={pokemon?.sprites.front_default} alt={props.name}  />
                </figure>

                {getStats()}

                <div className="card-actions justify-end">
                    <ModalBtn id={pokemon?.id} pokemon={pokemon} />
                </div>
            </div>
        </div>
    )
}

export default PokeCard