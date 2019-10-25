import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/shops/';

export function getShops() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveShop(shop) {
    return fetch(baseUrl, {
        method: 'POST', // POST for create, PUT to update when id already exists.
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(shop),
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteShop(shopId) {
    return fetch(baseUrl + shopId, { method: 'DELETE' })
        .then(handleResponse)
        .catch(handleError);
}
