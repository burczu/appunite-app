// @ts-ignore
export default {
  CancelToken: {
    source: jest.fn(() => ({ token: {} })),
  },
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
