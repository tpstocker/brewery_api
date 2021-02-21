import React from 'react';

const BreweryDisplay = ({brewery, onVisitedToggle}) => {

    if(!brewery){
        return (null)
    }
    return(

        <>
        <div className="brewery-details">

                <h2>{brewery.name}</h2>
                <h3>{brewery.city}, {brewery.state}</h3>

                <div>
                    <h1>{brewery.website_url}</h1>
                    <button onClick={() => {onVisitedToggle(brewery)}}>
            {brewery.visited ? 'Delete from Favourites' : 'Add to favourites'}
            </button>            
            </div>

            </div>
        </>
    

    )
}

export default BreweryDisplay;