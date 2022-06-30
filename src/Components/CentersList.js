import React, {useEffect, useState} from 'react'
import {LOAD_CENTERS} from "../GraphQL/Queries"
import {useQuery} from "@apollo/client"
import Centers from "./Centers";
import ReactPaginate from "react-paginate";

const PER_PAGE = 9;

const CentersList = ({ showSpaceCenter }) => {
    const [pageCount, setpageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const {error, loading, data} = useQuery(LOAD_CENTERS, {variables: {page: currentPage, pageSize: 9}});

    useEffect(() => {
        if(!pageCount && data) {
            setpageCount(Math.ceil(data?.spaceCenters.pagination.total/PER_PAGE));
        }
    }, [data])

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage + 1);
        showSpaceCenter(null);
    }

    if(error) return <span style='color: red'> {error}</span>
    return (
        <>
            { loading ? 'Loading...' :  
                <Centers 
                    centers={data?.spaceCenters.nodes}
                    showSpaceCenter={showSpaceCenter}
                /> 
            }
            { pageCount && <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"gridWrapper__pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            }
        </>
    )
}

export default CentersList