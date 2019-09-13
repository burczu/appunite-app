import { IArticle } from '@Model/article/types';

export interface IArticlesResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
