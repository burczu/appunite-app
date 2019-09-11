import ArticlesApi from '@Services/$articles-api';
import SourcesApi from '@Services/$sources-api';

export interface IServices {
  articlesApi: typeof ArticlesApi;
  sourcesApi: typeof SourcesApi;
}

const services: IServices = {
  articlesApi: ArticlesApi,
  sourcesApi: SourcesApi,
};

export default services;
