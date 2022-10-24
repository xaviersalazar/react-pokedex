const ViewMoreCard = (props) => {

    return (
        <>
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">Welcome to the modal that will display the details below about the Pokemon you chose!</p>
            <ul>
                <li>Abilities</li>
                <li>All Evolutions</li>
                <li>Habitat</li>
                <li>Height - {props.pokemon?.height}</li>
                <li>Weight - {props.pokemon?.weight}</li>
            </ul>
        </>
    )
}
export default ViewMoreCard