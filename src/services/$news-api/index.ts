import config from '@Config';
import getData from '@Misc/helpers/api/getData';
import axios, { CancelTokenSource } from 'axios';
import { IArticlesResponse } from './types';

class NewsApi {
  private static getUrl(
    category: string,
    sortBy: string,
    dateFrom: string,
    dateTo: string,
  ): string {
    const everything = 'everything';
    const topHeadlines = 'top-headlines';

    let url = config.api.baseUrl;

    if (category !== '') {
      url += `/${topHeadlines}?category=${category}&`;
    } else {
      url += `/${everything}?`;

      if (sortBy !== '') {
        url += `sortBy=${sortBy}&`;
      }

      if (dateFrom !== '' && dateTo !== '') {
        url += `from=${dateFrom}&to=${dateTo}&`;
      }
    }

    url += `apiKey=${config.api.apiKey}`;

    return url;
  }

  private cancelToken?: CancelTokenSource;

  public getArticles(
    category: string,
    sortBy: string,
    dateFrom: string,
    dateTo: string,
  ): Promise<IArticlesResponse> {
    return new Promise<IArticlesResponse>((resolve, reject) => {
      this.cancelToken = axios.CancelToken.source();

      axios
        .get(NewsApi.getUrl(category, sortBy, dateFrom, dateTo))
        .then(getData)
        .then((response: IArticlesResponse) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  public cancelArticles() {
    if (this.cancelToken) {
      this.cancelToken.cancel();
      this.cancelToken = undefined;
    }
  }
}

export default new NewsApi();
