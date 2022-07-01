import React from 'react';
import { StyledDeparturesList } from "./styles/DeparturesList.styled";

const handleScroll = ({ currentTarget }, onLoadMore) => {
    if( currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight){
        onLoadMore();
    }
};

function DeparturesList({departures = [], total = '', onLoadMore = ()=>{}}) {
    return (
        <StyledDeparturesList>  
            <div className="num-flights">Number of flights: <span style={{minHeight: '20px'}}>{total}</span></div>
            <h3>DEPARTURES</h3>
            <div className="list-container">
                <ul onScroll={e => handleScroll(e, onLoadMore)} style={{overflow: 'scroll'}}>
                    {departures.map((dep) => {
                        return(
                        <li key={dep.id} className={dep.id ? '' : '-add-blur'}>
                            <img alt="planet_placeholder" src={'/images/planet-loader.svg'}/>
                            <div className="departure-container">
                                <div className="departure-container__where">To: Planet {dep.landingSite.planet.name}</div>
                                <div className="departure-container__when">{dep.departureAt}</div>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </StyledDeparturesList>
    );
}

export default DeparturesList