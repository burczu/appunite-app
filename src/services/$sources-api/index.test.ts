import config from '@Config';
import mockAxios from 'axios';
import SourcesApi from './index';
import { ISourcesResponse } from './types';

describe('SourcesApi', () => {
  const mockData: ISourcesResponse = {
    sources: [
      {
        category: 'test',
        country: 'test',
        description: 'test',
        id: 'test',
        language: 'test',
        name: 'test',
        url: 'http://test.com',
      },
    ],
    status: 'ok',
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
        await SourcesApi.getSources();
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

    describe('when getSources called', () => {
      it('should fetch data using correct url address', async () => {
        const expectedUrl = `${config.api.baseUrl}/sources?apiKey=${config.api.apiKey}`;

        await SourcesApi.getSources();

        expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
      });
    });

    describe('when getSources called', () => {
      it('should fetch data only once', async () => {
        await SourcesApi.getSources();

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
      });
    });

    describe('when getSources called', () => {
      it('should resolves correct data', async () => {
        const data = await SourcesApi.getSources();

        expect(data).toEqual(mockData);
      });
    });
  });
});
