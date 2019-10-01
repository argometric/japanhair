import React, { useState, useEffect } from "react";
import { getLocations } from "../api/locationApi";
import LocationsList from "./LocationsList";

function LocationsPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then(_locations => setLocations(_locations));
  }, []);

  return (
    <div className="album py-2 container">
      <div className="container">
        <div className="row">
          <LocationsList locations={locations} />
        </div>
      </div>
    </div>
  );
}

export default LocationsPage;
