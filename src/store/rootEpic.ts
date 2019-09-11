import { combineEpics } from 'redux-observable';

// Import modules
import * as Articles from '@Model/articles/epics';
import * as Sources from '@Model/sources/epics';

/* @@STORE_COMPONENT@@ */
export default combineEpics(
  // Articles
  Articles.requestArticlesWhenLocationChangedToHome,

  // Sources
  Sources.fetchSourcesWhenRequested,
  Sources.requestSourcesWhenLocationChangedToHome,
);
