const PaginationBtn = (props) => {
    return (
        <div className="">
            {props.offsetPage > 0 && <button className="btn btn-outline" onClick={props.prevPage}>Previous</button>}
            <button className="btn btn-outline px-8" onClick={props.nextPage}>Next</button>
        </div>
    )
}
export default PaginationBtn