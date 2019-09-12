import { IArticle } from '@Model/articles/types';

export interface IArticlesFromState {
  articles: IArticle[];
}

export type IArticlesProps = IArticlesFromState;
