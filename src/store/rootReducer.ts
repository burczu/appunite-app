import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from './history';

// App reducers
import articlesReducer from '@Model/articles/reducer';

const rootReducer = combineReducers({
  // Router
  router: connectRouter(history),

  // App reducers
  articles: articlesReducer,
});

export default rootReducer;
