import requst from '@/request/axios';
export const USER_PATH = '/api/u/v1/';

/** 登录接口 */
export const login = params => {
  return requst(`${USER_PATH}user/login`, {
    method: 'POST',
    ...params,
  });
};
