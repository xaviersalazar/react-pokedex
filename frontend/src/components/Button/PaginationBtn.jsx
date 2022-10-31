import {useState} from "react";

const PaginationBtn = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const nextPage = () => {
        props.nextPagination();
        setCurrentPage(prevState => prevState + 1);
    }
    const prevPage = () => {
        props.prevPagination();
        setCurrentPage(prevState => prevState - 1);
    }

    return (
        <div>
            <div className="flex justify-center p-6">
                {props.offsetPage > 0 && <button className="btn btn-outline" onClick={prevPage}>Previous</button>}
                <button className="btn btn-outline px-8" onClick={nextPage}>Next</button>
            </div>
            <div className="flex justify-center pb-6">Page {currentPage}</div>
        </div>
    )
}
export default PaginationBtn