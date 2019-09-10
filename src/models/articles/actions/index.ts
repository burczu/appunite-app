import {
  _GET_ARTICLES_FAILURE,
  _GET_ARTICLES_REQUEST,
  _GET_ARTICLES_SUCCESS,
} from '@Model/articles/constants/actions';
import { IArticle } from '@Model/articles/types';
import { createAsyncAction } from 'typesafe-actions';

export const getArticles = createAsyncAction(
  _GET_ARTICLES_REQUEST,
  _GET_ARTICLES_SUCCESS,
  _GET_ARTICLES_FAILURE,
)<undefined, IArticle[], Error>();
