import { AxiosResponse } from 'axios';
import getData from './getData';

describe('getData', () => {
  it('should return correct value', () => {
    const testData = { test: 'test' };
    const testResponse: AxiosResponse = {
      config: {},
      data: testData,
      headers: null,
      status: 200,
      statusText: 'OK',
    };

    expect(getData(testResponse)).toEqual(testData);
  });
});
