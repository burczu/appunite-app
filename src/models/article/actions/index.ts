import { IArticle } from '@Model/article/types';
import { createStandardAction } from 'typesafe-actions';
import { _SET_ARTICLE } from './../constants/actions';

export const setArticle = createStandardAction(_SET_ARTICLE)<IArticle>();
