import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/locations/";

export function getLocation() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveLocation(location) {
  return fetch(baseUrl + (location.id || ""), {
    method: location.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(location)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletelocation(locationId) {
  return fetch(baseUrl + locationId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
