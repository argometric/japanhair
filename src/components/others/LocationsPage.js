import React, { useState, useEffect } from 'react';
import { getLocations } from '../../api/locationApi';
import { getShops } from '../../api/shopAPI';
import LocationsList from './LocationsList';

function LocationsPage() {
    const [locations, setLocations] = useState([]);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        getLocations().then(_locations => setLocations(_locations));
        getShops().then(_shops => setShops(_shops));
    }, []);

    return (
        <div className='album py-2 container'>
            <div className='row'>
                <LocationsList locations={locations} shops={shops} />
            </div>
        </div>
    );
}

export default LocationsPage;
