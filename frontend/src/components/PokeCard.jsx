import {useEffect, useState} from "react";

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
                <p>{item.stat.name} {item.base_stat}</p>
            )
        )
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img src={pokemon?.sprites.front_default} alt={props.name}  />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>

                {getStats()}

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    )
}

export default PokeCard