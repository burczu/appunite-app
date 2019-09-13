export interface IArticleSource {
  id: string | null;
  name: string;
  url?: string;
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: IArticleSource;
  title: string;
}

export type IArticleReducer = IArticle;
