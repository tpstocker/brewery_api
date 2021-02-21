import React from 'react';

const VisitedBreweriesList = ({breweries, onSelectedBrewery}) => {

    const filteredBreweries = breweries.filter((brewery) => {
        return brewery.visited
    })

    const listNodes = filteredBreweries.map((brewery) => {
        return(
            <li onCLick ={() => {onSelectedBrewery(brewery)}} key={brewery.id}>{brewery.name}</li>
            )
        
    })

    return(
        <>
        <h2>Visited Breweries</h2>
        <div className="visited-breweries">
            <ul>
                {listNodes}
            </ul>
        </div>
        </>
    )
}

export default VisitedBreweriesList;