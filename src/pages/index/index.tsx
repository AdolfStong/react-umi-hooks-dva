import React from 'react';
import styles from './index.scss';

export default () => {
  return (
    <div className={styles.myIndex}>
      <div className={styles.confirmContainer}>
        <div className={styles.title}>确定要取消付款？</div>
        <div className={styles.operate}>
          <div className={styles.btn}>确认离开</div>
          <div className={styles.btn}>继续支付</div>
        </div>
      </div>
    </div>
  );
};
