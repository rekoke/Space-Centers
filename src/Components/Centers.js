import React from 'react'

const Centers = ({centers, showSpaceCenter}) => {
    return (
        <ul>
            {centers.map((center) => {
                return(
                    <li key={center.id} onClick={() => {showSpaceCenter(center.id)}}>
                        name: {center.name}
                    </li>
                )
            })}
        </ul>
    )
}

export default Centers
