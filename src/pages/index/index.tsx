import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';

const IndexInfo = (props: any) => {
  return (
    <div className={styles.myIndex}>
      <div>index-page</div>
    </div>
  );
};

export default IndexInfo;
