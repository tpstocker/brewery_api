import React from 'react';

const BreweriesList = ({breweries, onSelectedBrewery}) => {

    const breweryNames = breweries.map((brewery) =>{
        return(
            

        <li onClick ={() => {onSelectedBrewery(brewery)}} key={brewery.id}>{brewery.name}</li>
        )
    })

    return(
        <>
        <div id="brewery-list">
            <ul>
                {breweryNames}
            </ul>
        </div>
        </>

    )
}

export default BreweriesList;