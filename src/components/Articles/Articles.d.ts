import { IArticle } from '@Model/articles/types';

export interface IArticlesFromState {
  articles: IArticle[];
  isError: boolean;
  isLoading: boolean;
}

export type IArticlesProps = IArticlesFromState;
