import React, {useEffect, useState} from 'react'
import {LOAD_CENTERS} from "../GraphQL/Queries"
import {useQuery} from "@apollo/client"
import Centers from "./Centers";
import ReactPaginate from "react-paginate";
import { StyledPager } from "./styles/Pager.styled";

const PER_PAGE = 9;

const CentersList = ({ showSpaceCenter }) => {
    const [pageCount, setpageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const {error, data} = useQuery(LOAD_CENTERS, {variables: {page: currentPage, pageSize: 9}});

    useEffect(() => {
        if(!pageCount && data) {
            setpageCount(Math.ceil(data?.spaceCenters.pagination.total/PER_PAGE));
        }
    }, [data, pageCount])

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage + 1);
        showSpaceCenter(null);
    }

    if(error) return <span style={{color: 'red'}}> {error}</span>
    return (
        <>
            <Centers 
                centers={data?.spaceCenters.nodes}
                showSpaceCenter={showSpaceCenter}
            /> 
            { pageCount && 
            <StyledPager>
                <ReactPaginate
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
            </StyledPager>
            }
        </>
    )
}

export default CentersList