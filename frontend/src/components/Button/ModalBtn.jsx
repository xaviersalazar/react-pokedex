import ViewMoreCard from "../Card/ViewMoreCard";
import {useState} from "react";
const ModalBtn = (props) => {

    const [modalClicked, setModalClicked] = useState(false)
    const toggleModalClicked = () => setModalClicked(prevState => !prevState)

    return (
        <>
            <label htmlFor={props.id} className="grow-animation btn btn-sm bg-gradient-to-r from-indigo-500 to-pink-500 modal-button text-white border-none shadow-md my-2" onClick={toggleModalClicked}>View More</label>

            <input type="checkbox" id={props.id} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">

                    {modalClicked && <ViewMoreCard
                        pokemonId={props.id}
                        pokemon={props.pokemon}
                        pokemonName={props.pokemonName}
                        getType={props.getType}
                    />}

                    <div className="modal-action">
                        <label htmlFor={props.id} className="grow-animation btn btn-sm bg-gradient-to-r from-indigo-500 to-pink-500 modal-button text-white border-none shadow-md my-2" onClick={toggleModalClicked}>Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalBtn