import { combineEpics } from 'redux-observable';

// Import modules
import * as Articles from '@Model/articles/epics';

/* @@STORE_COMPONENT@@ */
export default combineEpics(
  // Articles
  Articles.requestArticlesWhenLocationChangedToHome,
);
