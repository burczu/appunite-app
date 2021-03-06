import config from '@Config';
import mockAxios from 'axios';
import NewsApi from './index';
import { IArticlesResponse } from './types';

describe('NewsApi', () => {
  const mockData: IArticlesResponse = {
    articles: [
      {
        author: 'test',
        content: 'test',
        description: 'test',
        publishedAt: '2019-01-01',
        source: {
          id: null,
          name: 'Test spource',
        },
        title: 'test',
        url: 'http://test.com',
        urlToImage: 'http://test.com/image.png',
      },
    ],
    status: 'ok',
    totalResults: 100,
  };

  describe('in case of error', () => {
    const mockErrorMessage = 'test message';

    beforeEach(() => {
      // @ts-ignore
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(mockErrorMessage)),
      );
    });

    afterEach(() => {
      // @ts-ignore
      mockAxios.get.mockClear();
    });

    it('should catch and reject error', async () => {
      try {
        await NewsApi.getArticles([], '', '', '', 1);
      } catch (error) {
        expect(error.message).toEqual(mockErrorMessage);
      }
    });
  });

  describe('if everything ok', () => {
    beforeEach(() => {
      // @ts-ignore
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: mockData,
        }),
      );
    });

    afterEach(() => {
      // @ts-ignore
      mockAxios.get.mockClear();
    });

    describe('when just getArticles called', () => {
      it('should resolves correct data', async () => {
        const data = await NewsApi.getArticles([], '', '', '', 1);

        expect(data).toEqual(mockData);
      });
    });

    describe('when just getArticles called', () => {
      it('should be called only once', async () => {
        await NewsApi.getArticles([], '', '', '', 1);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
      });
    });

    describe('when just getArticles called', () => {
      it('should fetch data without filters using everything endpoint', async () => {
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], '', '', '', 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sources provided', () => {
      it('should fetch data from everything endpoint with sources passed', async () => {
        const mockSources = ['test1', 'test2', 'test3'];
        const expectedUrl = `${
          config.api.baseUrl
        }/everything?q=apple&pageSize=9&page=1&sources=${mockSources.join(
          ',',
        )}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles(mockSources, '', '', '', 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sources and sortBy provided', () => {
      it('should fetch data from everything endpoint with sources and sortBy passed', async () => {
        const mockSources = ['test1', 'test2', 'test3'];
        const mockSortBy = 'test';
        const expectedUrl = `${
          config.api.baseUrl
        }/everything?q=apple&pageSize=9&page=1&sources=${mockSources.join(
          ',',
        )}&sortBy=${mockSortBy}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles(mockSources, mockSortBy, '', '', 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sources and sortBy and dateFrom and dateTo provided', () => {
      it('should fetch data from everything endpoint with all the data passed', async () => {
        const mockSources = ['test1', 'test2', 'test3'];
        const mockSortBy = 'test';
        const mockDateFrom = 'test';
        const mockDateTo = 'test';
        const expectedUrl = `${
          config.api.baseUrl
        }/everything?q=apple&pageSize=9&page=1&sources=${mockSources.join(
          ',',
        )}&sortBy=${mockSortBy}&from=${mockDateFrom}&to=${mockDateTo}&apiKey=${
          config.api.apiKey
        }`;

        await NewsApi.getArticles(
          mockSources,
          mockSortBy,
          mockDateFrom,
          mockDateTo,
          1,
        );

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sortBy only provided', () => {
      it('should fetch data from everything endpoint with sortBy passed', async () => {
        const mockSortBy = 'test';
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&sortBy=${mockSortBy}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], mockSortBy, '', '', 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sortBy and dateFrom and dateTo only provided', () => {
      it('should fetch data from everything endpoint with sortBy and dates passed', async () => {
        const mockSortBy = 'test';
        const mockDateFrom = '2018-01-01';
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&sortBy=${mockSortBy}&from=${mockDateFrom}&to=${mockDateTo}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], mockSortBy, mockDateFrom, mockDateTo, 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when dateFrom and dateTo only provided', () => {
      it('should fetch data from everything endpoint with dates passed', async () => {
        const mockDateFrom = '2018-01-01';
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&from=${mockDateFrom}&to=${mockDateTo}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], '', mockDateFrom, mockDateTo, 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when dateFrom only provided', () => {
      it('should fetch data from everything endpoint without filters', async () => {
        const mockDateFrom = '2018-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], '', mockDateFrom, '', 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when dateTo only provided', () => {
      it('should fetch data from everything endpoint without filters', async () => {
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?q=apple&pageSize=9&page=1&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles([], '', '', mockDateTo, 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });

    describe('when sources and dateFrom and dateTo only provided', () => {
      it('should fetch data from everything endpoint with sources and dates passed', async () => {
        const mockSources = ['test1', 'test2', 'test3'];
        const mockDateFrom = 'test';
        const mockDateTo = 'test';
        const expectedUrl = `${
          config.api.baseUrl
        }/everything?q=apple&pageSize=9&page=1&sources=${mockSources.join(
          ',',
        )}&from=${mockDateFrom}&to=${mockDateTo}&apiKey=${config.api.apiKey}`;

        await NewsApi.getArticles(mockSources, '', mockDateFrom, mockDateTo, 1);

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl, {
          cancelToken: {},
        });
      });
    });
  });
});
