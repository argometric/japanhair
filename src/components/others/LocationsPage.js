import React, { useState, useEffect } from 'react';
import locationStore from "../../stores/locationStore";
import LocationsList from './LocationsList';
import shopStore from "../../stores/shopStore";
import { loadShops } from "../../actions/shopActions";
import { loadLocations } from "../../actions/locationActions";

function LocationsPage() {
    const [locations, setLocations] = useState([]);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        locationStore.addChangeListerner(onChange);
        if (locationStore.getLocations().length === 0) loadLocations();

        shopStore.addChangeListerner(onChange);
        if (shopStore.getShops().length === 0) loadShops();
        return () => shopStore.removeChangeListener(onChange), locationStore.removeChangeListener(onChange);
    }, []);

      function onChange() {
        setLocations(locationStore.getLocations());
        setShops(shopStore.getShops());
      }



    return (
        <div className='album py-2 container'>
            <div className='row'>
                <LocationsList locations={locations} shops={shops} />
            </div>
        </div>
    );
}

export default LocationsPage;
