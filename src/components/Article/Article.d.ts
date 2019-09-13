import { IArticle } from '@Model/article/types';

export interface IArticleFromState {
  article: IArticle | null;
}

export interface IArticleFromDispatch {
  goBack: () => void;
}

export type IArticleProps = IArticleFromDispatch & IArticleFromState;
