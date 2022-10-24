import ViewMoreCard from "../Card/ViewMoreCard";

const ModalBtn = (props) => {
    return (
        <>
            <label htmlFor={props.id} className="btn modal-button btn-primary">View More</label>

            <input type="checkbox" id={props.id} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <ViewMoreCard pokemon={props.pokemon}/>
                    <div className="modal-action">
                        <label htmlFor={props.id} className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalBtn