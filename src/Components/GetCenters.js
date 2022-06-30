import React, {useEffect, useState} from 'react'
import CentersList from "./CentersList";
import CenterDescription from './ CenterDescription';

function GetCenters() {

    const [spaceCenterId, setSpaceCenterId] = useState(null);
    const showSpaceCenter = id => {
        setSpaceCenterId(id);
    }

    console.log('renders getcenters')
    return (
        <>
            <CentersList showSpaceCenter={showSpaceCenter}/>
            { spaceCenterId && <CenterDescription spaceCenterId={spaceCenterId} /> }
        </>
    )
}

export default GetCenters