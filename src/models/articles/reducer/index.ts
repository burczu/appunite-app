import { combineReducers } from 'redux';
import articlesReducer from './articles';

const reducer = combineReducers({
  articles: articlesReducer,
});

export default reducer;
