import config from '@Config';
import { IArticlesResponse } from '@Services/$news-api/types';
import mockAxios from 'axios';
import NewsApi from './index';

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
        await NewsApi.getArticles('', '', '', '');
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
      it('should fetch data without filters using everything endpoint', async () => {
        const expectedUrl = `${config.api.baseUrl}/everything?apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles('', '', '', '');

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when category provided', () => {
      it('should fetch data from top-headlines endpoint with category passed', async () => {
        const mockCategory = 'test';
        const expectedUrl = `${config.api.baseUrl}/top-headlines?category=${mockCategory}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles(mockCategory, '', '', '');

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when category and sortBy provided', () => {
      it('should fetch data from top-headlines endpoint with category passed', async () => {
        const mockCategory = 'test';
        const mockSortBy = 'test';
        const expectedUrl = `${config.api.baseUrl}/top-headlines?category=${mockCategory}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles(
          mockCategory,
          mockSortBy,
          '',
          '',
        );

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when category and sortBy and dateFrom and dateTo provided', () => {
      it('should fetch data from top-headlines endpoint with category passed', async () => {
        const mockCategory = 'test';
        const mockSortBy = 'test';
        const mockDateFrom = 'test';
        const mockDateTo = 'test';
        const expectedUrl = `${config.api.baseUrl}/top-headlines?category=${mockCategory}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles(
          mockCategory,
          mockSortBy,
          mockDateFrom,
          mockDateTo,
        );

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when sortBy only provided', () => {
      it('should fetch data from everything endpoint with sortBy passed', async () => {
        const mockSortBy = 'test';
        const expectedUrl = `${config.api.baseUrl}/everything?sortBy=${mockSortBy}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles('', mockSortBy, '', '');

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when sortBy and dateFrom and dateTo only provided', () => {
      it('should fetch data from everything endpoint with sortBy and dates passed', async () => {
        const mockSortBy = 'test';
        const mockDateFrom = '2018-01-01';
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?sortBy=${mockSortBy}&from=${mockDateFrom}&to=${mockDateTo}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles(
          '',
          mockSortBy,
          mockDateFrom,
          mockDateTo,
        );

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when dateFrom and dateTo only provided', () => {
      it('should fetch data from everything endpoint with dates passed', async () => {
        const mockDateFrom = '2018-01-01';
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?from=${mockDateFrom}&to=${mockDateTo}&apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles(
          '',
          '',
          mockDateFrom,
          mockDateTo,
        );

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when dateFrom only provided', () => {
      it('should fetch data from everything endpoint without filters', async () => {
        const mockDateFrom = '2018-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles('', '', mockDateFrom, '');

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when dateTo only provided', () => {
      it('should fetch data from everything endpoint without filters', async () => {
        const mockDateTo = '2019-01-01';
        const expectedUrl = `${config.api.baseUrl}/everything?apiKey=${config.api.apiKey}`;

        const data = await NewsApi.getArticles('', '', '', mockDateTo);

        expect(data).toEqual(mockData);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });
  });
});
