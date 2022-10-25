const PaginationBtn = (props) => {
    return (
        <div className="btn-group grid grid-cols-2">
            <button className="btn btn-outline" onClick={props.prevPage}>Previous page</button>
            <button className="btn btn-outline" onClick={props.nextPage}>Next</button>
        </div>
    )
}
export default PaginationBtn