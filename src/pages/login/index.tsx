import React, { useState, useEffect } from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import headerImg from '@/assets/images/header-bg.png';
import phoneIcon from '@/assets/images/phone-icon.png';
import saveIcon from '@/assets/images/save-icon.png';
import bottomBg from '@/assets/images/bottom-bg.png';

import { Toast } from 'antd-mobile';

const LoginInfo = (props: any) => {
  const { dispatch } = props;
  const [mobile, setMobile] = useState<string>('15591611037');
  const [code, setCode] = useState<string>('8510');

  useEffect(() => {}, [mobile, code]);

  const loginHandle: Function = async () => {
    // duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide
    Toast.loading('正在登录...', 0);
    const params = {
      type: 'login/login',
      payload: {
        data: {
          mobile: mobile,
          code,
        },
      },
    };
    try {
      const logRes = await dispatch(params);
      console.log('login res', logRes);
    } catch (err) {
      console.log('err', err);
    }

    Toast.hide();
  };

  return (
    <div className={styles.myLogin}>
      <header className={styles.header}>
        <img src={headerImg} alt="" />
      </header>
      <section>
        <div className={styles['input-box']}>
          <div className={styles.logo}>
            <img src={headerImg} alt="" />
          </div>
          <div className={styles['input-list']}>
            <div className={styles.phone}>
              <img src={phoneIcon} alt="" />
              <input
                type="number"
                value={mobile}
                name="mobile"
                onChange={event => setMobile(event.target.value)}
                placeholder="请输入手机号"
              />
            </div>
            <div className={styles.code}>
              <img src={saveIcon} alt="" />
              <input
                type="number"
                value={code}
                onChange={event => setCode(event.target.value)}
                placeholder="验证码"
              />
              <span className="get-code-btn">获取验证码</span>
              {/* <span v-else className="get-again">重新发送{{cutDown}}秒</span> */}
            </div>
            <div className={styles.choice}>
              <div className={styles['img-box']}>
                <div className={styles['border-line']}></div>
                <span className={styles.word}>本人已阅读并同意</span>
                {/* <img
                  className={styles.icon}
                  src="/static/images/choice-icon.png"
                /> */}
                <input type="hidden" />
              </div>
              <span className={styles.xieyi}>《用户协议》</span>
            </div>
          </div>
          <div className={styles['register-btn']} onClick={() => loginHandle()}>
            登录
          </div>
        </div>
      </section>
      <footer>
        <img src={bottomBg} alt="" />
      </footer>
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
