import { EventEmitter } from 'events';
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _locations = [];

class LocationStore extends EventEmitter {
  addChangeListerner(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getLocations() {
    return _locations;
  }
}

const store = new LocationStore();

Dispatcher.register(action => {
  switch(action.actionType) {
    case actionTypes.CREATE_LOCATION:
      _locations.push(action.location);
      store.emitChange();
      break;
    case actionTypes.LOAD_LOCATIONS:
      _locations = action.locations;
      store.emitChange();
      break;
    default:
    // no action to do.
  }
})

export default store;