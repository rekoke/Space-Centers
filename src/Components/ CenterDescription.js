import React, {useEffect, useState} from 'react'
import {useLazyQuery} from "@apollo/client"
import {FIND_CENTER} from "../GraphQL/Queries"
import DeparturesListQuery from "./DeparturesListQuery";


const  CenterDescription = ({spaceCenterId}) => {
    const [center, setCenter] = useState(null);
    // The useLazyQuery hook is perfect for executing queries in response to events besides component rendering.
    const [getCenter, {loading, error, data}] = useLazyQuery(FIND_CENTER);

    useEffect(() => {
        if(spaceCenterId){
            getCenter({variables: {id: spaceCenterId}})
        }
    }, [spaceCenterId])

    useEffect(() => {
        if(data) {
            setCenter(data)
        }
    }, [data])

    if(error) return <span style='color: red'>{error}</span>
    return (
        <>
            {loading ? 'Loading...' : 
                <>
                    {center && 
                        <div> 
                            <h1>{center.spaceCenter.name}</h1>
                            <p>{center.spaceCenter.description}</p>
                            <DeparturesListQuery from={spaceCenterId}/>
                            <button onClick={() => setCenter(null)}> close </button>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default  CenterDescription