import { combineReducers } from 'redux';
import errorsReducer from './errors';
import loadersReducer from './loaders';

const reducer = combineReducers({
  errors: errorsReducer,
  loaders: loadersReducer,
});

export default reducer;
