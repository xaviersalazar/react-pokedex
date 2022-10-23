const ModalBtn = () => {
    return (
        <>
            <label htmlFor="my-modal-6" className="btn modal-button btn-primary">View More</label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">Welcome to the modal that will display the details below about the Pokemon you chose!</p>
                    <ul>
                        <li>Abilities</li>
                        <li>All Evolutions</li>
                        <li>Habitat</li>
                        <li>Height</li>
                        <li>Weight</li>
                    </ul>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalBtn