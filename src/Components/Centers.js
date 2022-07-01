import React from 'react'
import { StyledCenters } from "./styles/Centers.styled";

const Centers = ({centers = [], showSpaceCenter}) => {
    return (
        <StyledCenters>
            <ul>
                {centers.map((center, index) => {
                    return(
                        <li key={center.id} onClick={() => {showSpaceCenter(center.id)}}>
                            {/* Adding random image, could match with planets */}
                            <img src={`/images/planet-${index + 1}.svg`}/>
                            <h3>{center.name}</h3>
                        </li>
                    )
                })}
            </ul>
        </StyledCenters>
    )
}

export default Centers
