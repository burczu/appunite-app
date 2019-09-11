import {
  _GET_FAILURE,
  _GET_REQUEST,
  _GET_SUCCESS,
} from '@Model/articles/constants/actions';
import { IArticle, IArticlesRequestPayload } from '@Model/articles/types';
import { createAsyncAction } from 'typesafe-actions';

export const getArticles = createAsyncAction(
  _GET_REQUEST,
  _GET_SUCCESS,
  _GET_FAILURE,
)<IArticlesRequestPayload, IArticle[], Error>();
