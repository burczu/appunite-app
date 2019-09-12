import { combineReducers } from 'redux';
import articlesReducer from './articles';
import paginationReducer from './pagination';

const reducer = combineReducers({
  articles: articlesReducer,
  pagination: paginationReducer,
});

export default reducer;
