import React, {useState, useEffect} from 'react';
import BreweriesList from '../components/BreweriesList';
import BreweryDisplay from '../components/BreweryDisplay';
import VisitedBreweriesList from '../components/VisitedBreweriesList';



const BreweriesContainer = () => {

    const [breweries, setBreweries] = useState([]);
    const [selectedBrewery, setSelectedBrewery] = useState(null);


    const getBreweries = () => {
        fetch('https://api.openbrewerydb.org/breweries')
        .then(res => res.json())
        .then(data => setBreweries(data))
    }


    useEffect(() => {
        getBreweries();
    },[]);


    const handleSelectedBrewery = (brewery) => {
        console.log("brewery Selected is", brewery.name);
        setSelectedBrewery(brewery)
    }

    const handleVisitedToggle = (updatedBrewery) => {
        const updatedBreweries = breweries.map((brewery) => {
            if (brewery.name === updatedBrewery.name){
                brewery.visited = !brewery.visited
            }
            return brewery
        })
        setBreweries(updatedBreweries)
    }


    return(
        <>
        <div className="breweries_container">
            <div>
                <h1 id='title'>Breweries</h1>
                    <BreweriesList breweries={breweries} onSelectedBrewery={handleSelectedBrewery}></BreweriesList>
                </div>
                <div id="display">
                    <BreweryDisplay brewery={selectedBrewery} onVisitedToggle={handleVisitedToggle}></BreweryDisplay>
                    <VisitedBreweriesList breweries={breweries} onSelectedBrewery={handleSelectedBrewery}></VisitedBreweriesList>
                </div>
        </div>
        </>
    )
}

export default BreweriesContainer;