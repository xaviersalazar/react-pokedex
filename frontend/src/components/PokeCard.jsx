import {useEffect, useState} from "react";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState(null)

    //use effect for fetch call
    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setPokemon(prevState => data))
    }, [])

    console.log(pokemon);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={pokemon?.sprites.front_default} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    )
}
export default PokeCard