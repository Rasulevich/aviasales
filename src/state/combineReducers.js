import { combineReducers } from 'redux';
import filtersReducer from './filters';
import ticketsReducer from './tickets';

export default combineReducers({
  filtersReducer,
  ticketsReducer
})