import fetchMock from 'fetch-mock';

export const updateComponentWithData = (component, callback = () => {}) => {
  process.nextTick(() => {
    component.update();
    callback();
  });
}

export const mockUrl = (url, data) => {
  fetchMock.get(url, data, { overwriteRoutes: true });
}
