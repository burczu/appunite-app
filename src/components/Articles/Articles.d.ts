import { IArticle } from '@Model/articles/types';

export interface IArticlesFromState {
  articles: IArticle[];
  isLoading: boolean;
}

export type IArticlesProps = IArticlesFromState;
