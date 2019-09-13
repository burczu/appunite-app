import {
  _SET_ARTICLES_ERROR,
  _SET_ARTICLES_LOADING,
  _SET_SOURCES_ERROR,
  _SET_SOURCES_LOADING,
} from '@Model/state/constants/actions';
import { createStandardAction } from 'typesafe-actions';

export const setArticlesLoading = createStandardAction(_SET_ARTICLES_LOADING)<
  boolean
>();

export const setArticlesError = createStandardAction(_SET_ARTICLES_ERROR)<
  boolean
>();

export const setSourcesLoading = createStandardAction(_SET_SOURCES_LOADING)<
  boolean
>();

export const setSourcesError = createStandardAction(_SET_SOURCES_ERROR)<
  boolean
>();
