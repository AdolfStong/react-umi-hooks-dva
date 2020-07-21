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
    console.log(Object.prototype.toString.call(response, 'res--'));
    return response;
  } catch (err) {
    Toast.info(err, 2);
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
    console.log('axios.interceptors.err', err);
    //     switch (err.response.status) {
    //       case 400:
    //         // Utils.removeCookie('token')
    //         Toast('参数错误');
    //         break;
    //       case 401: {
    //         // 有登录状态的token, 但已离职的老师会提示
    //         if (document.getElementsByClassName('el-message').length === 0) {
    //           Toast('没有权限，禁止登录');
    //         }
    //         // 退出登录
    //         setTimeout(() => {
    //           removeToken();
    //           location.href = `/login/#/`;
    //         }, 1000);
    //         break;
    //       }
    //       case 404: {
    //         Toast('接口不存在');
    //         break;
    //       }
    //       case 420: {
    //         Toast('无权限执行');
    //         break;
    //       }
    //       case 500:
    //       default:
    //         Toast('服务器异常');
    //         break;
    //     }
    //     return err.response;
  },
);

console.log('axios', request);

export default request;
