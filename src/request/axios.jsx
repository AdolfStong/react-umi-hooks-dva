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
  console.log('requst-opetion', option);
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

  const response = await axios(url, requstOption);
};

axios.interceptors.response.use(
  response => {
    console.log('axios.interceptors.response', response);
    // let _data = null;
    // if (response.status === 200) {
    //   _data = response.data;
    //   if (_.isPlainObject(_data) && _data.code) {
    //     switch (_data.code) {
    //       case '0':
    //         _data = null;
    //         break;
    //       case '2':
    //       default:
    //         Toast(_data.errors || '服务器异常');
    //         break;
    //     }
    //   }
    // }
    // return _data;
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

export default request;
