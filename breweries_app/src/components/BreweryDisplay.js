import React from 'react';

const BreweryDisplay = ({brewery, onVisitedToggle}) => {

    if(!brewery){
        return (null)
    }
    return(

        <>
        <div className="brewery-display">

                <h1>{brewery.name}</h1>
                <h3>{brewery.city}, {brewery.state}</h3>
                <div>
                    <button onClick={() => {onVisitedToggle(brewery)}}>
            {brewery.visited ? 'Delete from Favourites' : 'Add to favourites'}
            </button>            
            </div>

            </div>
        </>
    

    )
}

export default BreweryDisplay;