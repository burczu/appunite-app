import { AxiosResponse } from 'axios';

const getData = (response: AxiosResponse) => {
  return response.data;
};

export default getData;
