import React, { useState, useEffect } from 'react';
import styles from './index.scss';
import { connect } from 'dva';

const LoginInfo = (props: any) => {
  console.log('login-props', props);
  const { dispatch } = props;
  const [mobile, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');

  useEffect(() => {}, [mobile, code]);

  const loginHandle: Function = () => {
    console.log('login-btn', mobile, code);
    dispatch({
      type: 'login/login',
      payload: {
        data: {
          mobile,
          code,
        },
      },
    });
  };

  return (
    <div className={styles.myIndex}>
      <div>login-page</div>
      <div className="formBox">
        <input
          type="text"
          name="mobile"
          onChange={event => setPhone(event.target.value)}
        />
        <input
          type="text"
          name="code"
          onChange={event => setCode(event.target.value)}
        />
      </div>
      <div className="submit">
        <button className="btn" onClick={() => loginHandle()}>
          登录
        </button>
      </div>
    </div>
  );
};

//字面意思就是，把models的state变成组件的props
const mapStateToProps = (state: any) => {
  const { loginInfo } = state['login']; // login就是models命名空间名字
  return {
    loginInfo, // 在这return,上面才能获取到
  };
};
export default connect(mapStateToProps)(LoginInfo);
