import {useState} from "react";

const CurrentPage = (props) => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className="flex justify-center pb-7">
            <p>Page {currentPage}</p>
        </div>
    )
}
export default CurrentPage