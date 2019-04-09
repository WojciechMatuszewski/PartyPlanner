import React from 'react';
import axios, {
  AxiosInstance,
  CancelTokenStatic,
  Canceler,
  AxiosRequestConfig
} from 'axios';

interface Options {
  autoCancel?: boolean;
  requestConfig?: AxiosRequestConfig;
}

const defaultOptions: Options = {
  autoCancel: false,
  requestConfig: {}
};

function useCancelableAxiosGet(
  axiosInstance: AxiosInstance,
  options: Options = defaultOptions
) {
  const cancelTokenRef = React.useRef<CancelTokenStatic>(axios.CancelToken);
  const requestCancelFuncRef = React.useRef<Canceler>(() => null);

  function cancelableGet(url: string) {
    options.autoCancel && cancelPreviousGetRequest();
    return axiosInstance.get(url, {
      cancelToken: new cancelTokenRef.current(
        (cancel: Canceler) => (requestCancelFuncRef.current = cancel)
      ),
      ...options.requestConfig
    });
  }

  function cancelPreviousGetRequest() {
    return requestCancelFuncRef.current && requestCancelFuncRef.current();
  }

  return {
    cancelPreviousGetRequest,
    cancelableGet
  };
}

export default useCancelableAxiosGet;
