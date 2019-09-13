import { combineEpics } from 'redux-observable';

// Import modules
import * as Article from '@Model/article/epics';
import * as Articles from '@Model/articles/epics';
import * as Filters from '@Model/filters/epics';
import * as Sources from '@Model/sources/epics';
import * as State from '@Model/state/epics';

/* @@STORE_COMPONENT@@ */
export default combineEpics(
  // Article
  Article.setArticlesWhenLocationChangedToArticles,

  // Articles
  Articles.resetStoreWhenFiltersClear,
  Articles.requestForArticlesOnGetMore,
  Articles.requestArticlesWhenFiltersChanged,
  Articles.requestArticlesWhenLocationChangedToHome,
  Articles.fetchArticlesWhenRequested,

  // Filters
  Filters.setCategoryWhenSelected,
  Filters.setDateWhenSelected,
  Filters.setSortByWhenSelected,

  // Sources
  Sources.fetchSourcesWhenRequested,
  Sources.requestSourcesWhenLocationChangedToHome,

  // State
  State.setArticlesErrorOnArticlesFailure,
  State.setSourcesErrorOnSourcesFailure,
  State.setArticlesLoaderOnArticlesRequest,
  State.setArticlesLoaderOnArticlesGetFinished,
  State.setSourcesLoaderOnSourcesRequest,
  State.setSourcesLoaderOnSourcesGetFinished,
);
