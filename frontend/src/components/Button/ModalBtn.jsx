import ViewMoreCard from "../Card/ViewMoreCard";
import {useState} from "react";

const ModalBtn = (props) => {

    const [modalClicked, setModalClicked] = useState(false)
    const toggleModalClicked = () => setModalClicked(prevState => !prevState)

    return (
        <>
            <label htmlFor={props.id} className="btn modal-button btn-primary" onClick={toggleModalClicked}>View More</label>

            <input type="checkbox" id={props.id} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {modalClicked && <ViewMoreCard pokemon={props.pokemon}/>}
                    <div className="modal-action">
                        <label htmlFor={props.id} className="btn" onClick={toggleModalClicked}>Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalBtn