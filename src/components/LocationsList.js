import React from "react";

const LocationsList = props => {
  return (
    <>
      <div className="album py-2">
        <div className="container">
          <div className="row">
            {props.locations.map(locations => {
              return (
                <div className="col-md-4" key={locations.id}>
                  <div className="card mb-4 shadow-sm">
                    <img
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      style={{ objectFit: "cover" }}
                      src={locations.imgUrl}
                      alt={locations.name}
                    />
                    <div className="card-body">
                      <div className="card-text text-center">
                        <h1>{locations.name}</h1>
                        <h2>{locations.phone}</h2>
                        <h2>{locations.email}</h2>
                        <button className="btn btn-dark btn-lg">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationsList;
