import { IArticle } from '@Model/articles/types';

export interface IArticlesResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
