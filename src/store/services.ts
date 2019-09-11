import NewsApi from '@Services/$articles-api';

export interface IServices {
  newsApi: typeof NewsApi;
}

const services: IServices = {
  newsApi: NewsApi,
};

export default services;
