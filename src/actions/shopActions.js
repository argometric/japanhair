import dispatcher from '../appDispatcher';
import * as shopApi from '../api/shopAPI';
import actionTypes from './actionTypes';

export function saveShop(shop) {
  shopApi.saveShop(shop).then(savedShop => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_SHOP,
      shop: savedShop
    });
  });
}

export function loadShops() {
  shopApi.getShops().then(shops => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_SHOPS,
      shops: shops
    });
  });
}