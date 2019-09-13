import { IArticle } from '@Model/article/types';
import {
  _GET_FAILURE,
  _GET_REQUEST,
  _GET_SUCCESS,
  _RESET_ARTICLES,
  _SET_PAGINATION,
  GET_MORE,
} from '@Model/articles/constants/actions';
import { IArticlesRequestPayload } from '@Model/articles/types';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const getArticles = createAsyncAction(
  _GET_REQUEST,
  _GET_SUCCESS,
  _GET_FAILURE,
)<IArticlesRequestPayload, IArticle[], Error>();

export const setPagination = createStandardAction(_SET_PAGINATION)<number>();

export const getMore = createStandardAction(GET_MORE)();

export const resetArticles = createStandardAction(_RESET_ARTICLES)();
