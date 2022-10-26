import {useEffect, useState} from "react";

const ViewMoreCard = (props) => {

    const [species, setSpecies] = useState(null)

    useEffect( () => {
        fetch(props.pokemon.species.url)
            .then(res => res.json())
            .then(data => setSpecies(data)
            )
    }, [])

    const getAbilities = props.pokemon.abilities.map(a => {
        return (
            <div key={a.ability.name} className="badge badge-outline ">{a.ability.name}</div>
        )
    })
    return (
        <>
            {species &&
                <div>
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">Welcome to the modal that will display the details below about the Pokemon you chose!</p>
                    <div className="flex gap-x-1">
                        {getAbilities}
                    </div>
                    <ul>
                        {species.evolves_from_species && <li>Previous Evolution - {species.evolves_from_species.name}</li>}
                        <li>Habitat - {species.habitat.name}</li>
                        <li>Height - {props.pokemon?.height}</li>
                        <li>Weight - {props.pokemon?.weight}</li>
                    </ul>
                </div>}
        </>
    )
}
export default ViewMoreCard