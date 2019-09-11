// @ts-ignore
export default {
  CancelToken: {
    source: jest.fn(),
  },
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
