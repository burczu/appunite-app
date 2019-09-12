import {
  _GET_FAILURE,
  _GET_REQUEST,
  _GET_SUCCESS,
  _SET_PAGINATION,
  GET_MORE,
} from '@Model/articles/constants/actions';
import { IArticle, IArticlesRequestPayload } from '@Model/articles/types';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const getArticles = createAsyncAction(
  _GET_REQUEST,
  _GET_SUCCESS,
  _GET_FAILURE,
)<IArticlesRequestPayload, IArticle[], Error>();

export const setPagination = createStandardAction(_SET_PAGINATION)<number>();

export const getMore = createStandardAction(GET_MORE)();
