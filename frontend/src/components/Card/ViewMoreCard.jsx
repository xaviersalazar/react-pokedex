import {useEffect, useState} from "react";

const ViewMoreCard = (props) => {

    const [species, setSpecies] = useState(null)
    const [effect, setEffect] = useState(null)
    const getAbilities = props.pokemon.abilities.map(a => <div key={a.ability.name} className="badge badge-secondary badge-outline">{a.ability.name}</div>)
    const getEffectDescription = effect?.effect_entries[1].effect;
    const decimeterToFeet = (num) => num / 3.048;
    const hectogramsToPounds = (num) => num / 4.536;

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
                        <h3 className="font-bold text-3xl text-black dark:text-slate-300 capitalize">{props.pokemonName}!</h3>
                        <div className="flex justify-end gap-x-1 font-bold">{props.getType}</div>
                    </div>
                    <p className="py-4">{getEffectDescription}</p>

                    <figure className="border-2 dark:border-slate-600 rounded-t-lg h-72 mt-4
                    bg-gradient-to-r from-white via-blue-250 to-blue-500
                    ">
                        <img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemonName} className="max-h-72" />
                    </figure>

                    <div className="flex justify-evenly text-xs bg-gray-100 dark:bg-slate-600 rounded-b-lg text-black dark:text-slate-300 mt-1 mb-6">
                        <p className="grow-0">Ht - {decimeterToFeet(props.pokemon?.height).toFixed(2)}ft</p>
                        <p className="grow-0">Wt - {hectogramsToPounds(props.pokemon?.weight).toFixed(0)}lbs</p>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold text-lg text-black dark:text-slate-300">Abilities</h3>
                        <div className="flex gap-x-1">
                            {getAbilities}
                        </div>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold text-lg text-black dark:text-slate-300">Habitat</h3>
                            <p className="text-accent">{species.habitat.name}</p>
                    </div>
                    {species.evolves_from_species &&
                        <div className="my-2">
                            <h3 className="font-bold text-lg text-black dark:text-slate-300">Previous Evolution</h3>
                            <p className="capitalize text-info">{species.evolves_from_species.name}</p>
                        </div>
                    }
                </div>}
        </div>
    )
}
export default ViewMoreCard