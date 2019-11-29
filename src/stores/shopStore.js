import { EventEmitter } from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _shops = [];

class ShopStore extends EventEmitter {
  addChangeListerner(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getShops() {
    return _shops;
  }
}

const store = new ShopStore();

Dispatcher.register(action => {
  switch(action.actionType) {
    case actionTypes.CREATE_SHOP:
      _shops.push(action.shop);
      store.emitChange();
      break;
    case actionTypes.LOAD_SHOPS:
      _shops = action.shops;
      store.emitChange();
      break;
    default:
    // no action to do.
  }
})

export default store;