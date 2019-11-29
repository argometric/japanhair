import dispatcher from '../appDispatcher';
import * as locationApi from '../api/locationApi';
import actionTypes from './actionTypes';

export function saveLocation(location) {
  locationApi.saveLocation(location).then(savedLocation => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_LOCATION,
      location: savedLocation
    });
  });
}

export function loadLocations() {
  locationApi.getLocations().then(locations => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_LOCATIONS,
      locations: locations
    });
  });
}