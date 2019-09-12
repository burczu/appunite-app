import { combineEpics } from 'redux-observable';

// Import modules
import * as Articles from '@Model/articles/epics';
import * as Filters from '@Model/filters/epics';
import * as Sources from '@Model/sources/epics';

/* @@STORE_COMPONENT@@ */
export default combineEpics(
  // Articles
  Articles.fetchArticlesWhenRequested,
  Articles.requestArticlesWhenLocationChangedToHome,

  // Filters
  Filters.setCategoryWhenSelected,
  Filters.setDateWhenSelected,
  Filters.setSortByWhenSelected,

  // Sources
  Sources.fetchSourcesWhenRequested,
  Sources.requestSourcesWhenLocationChangedToHome,
);
