import config from '@Config';
import getData from '@Misc/helpers/api/getData';
import axios, { CancelTokenSource } from 'axios';
import { IArticlesResponse } from './types';

class ArticlesApi {
  private static getUrl(
    sources: string[],
    sortBy: string,
    dateFrom: string,
    dateTo: string,
  ): string {
    // the "q" query parameter is one of the few required ones
    // so it is hardcoded to make things easier...
    let url = `${config.api.baseUrl}/everything?q=apple&`;

    if (sources.length > 0) {
      url += `sources=${sources.join(',')}&`;
    }

    if (sortBy !== '') {
      url += `sortBy=${sortBy}&`;
    }

    if (dateFrom !== '' && dateTo !== '') {
      url += `from=${dateFrom}&to=${dateTo}&`;
    }

    url += `apiKey=${config.api.apiKey}`;

    return url;
  }

  private cancelTokenArticles?: CancelTokenSource;

  public getArticles(
    sources: string[],
    sortBy: string,
    dateFrom: string,
    dateTo: string,
  ): Promise<IArticlesResponse> {
    return new Promise<IArticlesResponse>((resolve, reject) => {
      this.cancelTokenArticles = axios.CancelToken.source();

      axios
        .get(ArticlesApi.getUrl(sources, sortBy, dateFrom, dateTo))
        .then(getData)
        .then((response: IArticlesResponse) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  public cancelArticles() {
    if (this.cancelTokenArticles) {
      this.cancelTokenArticles.cancel();
      this.cancelTokenArticles = undefined;
    }
  }
}

export default new ArticlesApi();
