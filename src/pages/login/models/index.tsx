/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-16 19:02:30
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-20 16:46:58
 */
import * as services from '../services/index';

interface State {
  loginInfo: object;
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
      const result = yield call(services.login, payload);
      console.log(
        'effects-login-result',
        typeof result,
        Object.prototype.toString.call(result),
      );

      // yield put({
      //   type: 'save',
      //   payload: {
      //     loginInfo: result.data.data,
      //   },
      // });
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
