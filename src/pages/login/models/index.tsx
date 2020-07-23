/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-16 19:02:30
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-23 17:15:40
 */
import * as services from '../services/index';

interface State {
  loginInfo: object;
}
interface AxiosErr {
  [propName: string]: any;
}
export default {
  namespace: 'login',
  state: {
    loginInfo: null,
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: Function; history: any }) {
      //   return history.listen(({ pathname: string }) => {
      //     if (pathname === '/') {
      //       dispatch({
      //         type: 'query',
      //       })
      //     }
      //   });
    },
  },
  effects: {
    *login(
      { payload }: { payload: object },
      { call, put }: { call: Function; put: Function },
    ) {
      try {
        const result = yield call(services.login, payload);
        if (result && result.payload) {
          return result.payload;
        }
        // yield put({
        //   type: 'save',
        //   payload: {
        //     loginInfo: result.data.data,
        //   },
        // });
      } catch (err) {
        /**
         * @err 请求接口后data中的全部错误
         * @description  此处返回的错误，可在页面处理
         */
        return Promise.reject(err);
      }
    },
  },
  reducers: {
    save(state: State, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
