import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from './history';

// App reducers
import articlesReducer from '@Model/articles/reducer';
import filtersReducer from '@Model/filters/reducer';
import sourcesReducer from '@Model/sources/reducer';
import stateReducer from '@Model/state/reducer';

const rootReducer = combineReducers({
  // Router
  router: connectRouter(history),

  // App reducers
  articles: articlesReducer,
  filters: filtersReducer,
  sources: sourcesReducer,
  state: stateReducer,
});

export default rootReducer;
