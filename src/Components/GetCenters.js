import React, {useState} from 'react'
import CentersList from "./CentersList";
import CenterDescription from './ CenterDescription';

function GetCenters() {

    const [spaceCenterId, setSpaceCenterId] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const showSpaceCenter = id => {
        setDrawerOpen(id ? true : false);
        setSpaceCenterId(id);
    }

    return (
        <>
            <CentersList showSpaceCenter={showSpaceCenter}/>
            <CenterDescription spaceCenterId={spaceCenterId} drawerOpen={drawerOpen} showSpaceCenter={showSpaceCenter}/>
        </>
    )
}

export default GetCenters