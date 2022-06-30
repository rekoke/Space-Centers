import React from 'react';

const handleScroll = ({ currentTarget }, onLoadMore) => {
    if( currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight){
        onLoadMore();
    }
};

function DeparturesList({departures, total, onLoadMore}) {
    console.log('HEY!')
    return (
        <>  
            <div>Total Flights: {total}</div>
            <ul onScroll={e => handleScroll(e, onLoadMore)} style={{border: '2px solid red', maxHeight: '250px', overflow: 'scroll'}}>
                {departures.map((dep) => {
                    return(
                    <li key={dep.id}>
                        id: {dep.id} ||
                        from: {dep.launchSite.planet.name} - {dep.launchSite.name} || 
                        to: {dep.landingSite.planet.name} - {dep.landingSite.name} || 
                        when: {dep.departureAt}
                    </li>
                    )
                })}
            </ul>
        </>
    );
}

export default DeparturesList