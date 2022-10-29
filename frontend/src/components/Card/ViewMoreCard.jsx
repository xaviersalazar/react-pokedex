import {useEffect, useState} from "react";

const ViewMoreCard = (props) => {

    const [species, setSpecies] = useState(null)
    const [effect, setEffect] = useState(null)
    const getAbilities = props.pokemon.abilities.map(a => <div key={a.ability.name} className="badge badge-secondary badge-outline">{a.ability.name}</div>)
    const getEffectDescription = effect?.effect_entries[1].effect;

    useEffect( () => {
        fetch(props.pokemon.species.url)
            .then(res => res.json())
            .then(data => setSpecies(data)
            )
    }, [])

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/ability/${props.pokemonId}`)
            .then(res => res.json())
            .then(data => setEffect(data)
            )
    }, [])

    return (
        <div className="">
            {species &&
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-3xl text-black capitalize">{props.pokemonName}!</h3>
                        <div className="flex justify-end gap-x-1 font-bold">{props.getType}</div>
                    </div>
                    <p className="py-4">{getEffectDescription}</p>

                    <figure className="border-2 rounded-t-lg bg-gradient-to-r from-white via-blue-250 to-blue-500 h-72 mt-4">
                        <img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemonName} className="max-h-72" />
                    </figure>

                    <div className="flex justify-evenly text-xs bg-gray-100 rounded-b-lg text-black mt-1 mb-6">
                        <p className="grow-0">Ht - {props.pokemon?.height}</p>
                        <p className="grow-0">Wt - {props.pokemon?.weight}</p>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold text-lg text-black">Abilities</h3>
                        <div className="flex gap-x-1">
                            {getAbilities}
                        </div>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold text-lg text-black">Habitat</h3>
                            <p className="text-accent">{species.habitat.name}</p>
                    </div>
                    {species.evolves_from_species &&
                        <div className="my-2">
                            <h3 className="font-bold text-lg text-black">Previous Evolution</h3>
                            <p className="capitalize">{species.evolves_from_species.name}</p>
                        </div>
                    }
                </div>}
        </div>
    )
}
export default ViewMoreCard