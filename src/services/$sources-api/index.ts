import config from '@Config';
import getData from '@Misc/helpers/api/getData';
import { ISourcesResponse } from '@Services/$sources-api/types';
import axios, { CancelTokenSource } from 'axios';

class SourcesApi {
  private static getUrl() {
    return `${config.api.baseUrl}/sources?apiKey=${config.api.apiKey}`;
  }

  private cancelTokenSources?: CancelTokenSource;

  public getSources(): Promise<ISourcesResponse> {
    return new Promise<ISourcesResponse>((resolve, reject) => {
      this.cancelTokenSources = axios.CancelToken.source();

      axios
        .get(SourcesApi.getUrl())
        .then(getData)
        .then((response: ISourcesResponse) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  }

  public cancelSources() {
    if (this.cancelTokenSources) {
      this.cancelTokenSources.cancel();
      this.cancelTokenSources = undefined;
    }
  }
}

export default new SourcesApi();
