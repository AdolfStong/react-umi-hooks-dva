import axios from 'axios';

const Qs = require('qs');

import { Toast } from 'antd-mobile';

const defauleOption = {
  timeout: 24000,
};

const getToken = () => '111';

const defaultHeaders = {
  Authorization: getToken(),
  'Content-Type': 'application/x-www-form-urlencoded',
};

const dealWithError = err => {};

const request = async (url, option) => {
  const { headers, method = 'GET' } = option;
  const requstOption = {
    ...defauleOption,
    ...option,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };
  if (method === 'GET') {
    if (JSON.stringify(mergeOptions.data) !== '{}') {
      url = `${url}${url.indexOf('?') !== -1 ? '&' : '?'}${Qs.stringify(
        options.data,
      )}`;
    }
  }
  if (method === 'POST') {
    requstOption.data = Qs.stringify(requstOption.data);
  }

  let response;
  try {
    response = await axios(url, requstOption);
    return response;
  } catch (err) {
    /** 所有的错误，都已在拦截器里处理了 */
    // console.log('axios接口请求错误：', err);
    return Promise.reject(err.data);
  }
};

// request拦截器
axios.interceptors.request.use(
  // 在发送请求之前做些什么
  config => config,
  error => {
    // 对请求错误做些什么
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    const { data, status } = response;
    if (status === 200 && data.code === 0) {
      return data;
    } else {
      return Promise.reject(data.errors || '服务器异常');
    }
  },
  err => {
    const errMessage = {
      400: '参数错误',
      401: '暂无权限',
      404: '接口不存在',
      500: '服务器异常',
      502: 'Nginx Error',
    };
    const {
      response: { status },
    } = err;

    Toast.info(errMessage[status], 2, () => {
      status === '401' && (location.href = `/login/`);
    });

    return Promise.reject(err.response);
  },
);

export default request;
