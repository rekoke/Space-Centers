import React, {useEffect, useState} from 'react'
import {useLazyQuery} from "@apollo/client"
import {FIND_CENTER} from "../GraphQL/Queries"
import DeparturesListQuery from "./DeparturesListQuery";
import { StyledCenterDescription } from "./styles/CenterDescription.styled";
import LoadingEllipsis from "./LoadingEllipsis";

const  CenterDescription = ({spaceCenterId, drawerOpen, showSpaceCenter}) => {
    const [center, setCenter] = useState({});
    // The useLazyQuery hook is perfect for executing queries in response to events besides component rendering.
    const [getCenter, {loading, data}] = useLazyQuery(FIND_CENTER);
    
    useEffect(() => {
        if(spaceCenterId){
            getCenter({variables: {id: spaceCenterId}})
            setCenter(data)
        } else {
            setCenter({})
        }
    }, [spaceCenterId, data, getCenter])


    return (
        <StyledCenterDescription drawerOpen={drawerOpen}>
            {loading ? <LoadingEllipsis /> : 
                <>
                    <h1>{center?.spaceCenter?.name}</h1>
                    <p>{center?.spaceCenter?.description}</p>
                    {center?.spaceCenter && <DeparturesListQuery from={spaceCenterId}/>}
                    
                </>
            }
            <button className='close' onClick={()=>showSpaceCenter(null)}></button>
        </StyledCenterDescription>
    )
}

export default  CenterDescription