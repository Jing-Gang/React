import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';


class IndexPage extends Component {
  render() {
    return (
      <div>

        <input type="text"/>
        <div className={styles.Box}>
          <div className={styles.item}>扫一扫</div>
          <div className={styles.item}>肤浅</div>
          <div className={styles.item}>收钱</div>
          <div className={styles.item}>卡包</div>
        </div>
        <div className={styles.little}>
          <div className={styles.item}>转账</div>
          <div className={styles.item}>饿了么</div>
          <div className={styles.item}>充值中心</div>
          <div className={styles.item}>余额宝</div>
        </div>
        <div className={styles.little}>

        <div className={styles.item}>转账</div>
          <div className={styles.item}>饿了么</div>
          <div className={styles.item}>充值中心</div>
          <Link to="/main/add" className={styles.item} >更多</Link>
        </div>
        <div className={styles.Tabs}>
          <Link to="/main/shoye">首页</Link>
          <Link to="/main/money">财富</Link>
          <Link to="/main/ko">口碑</Link>
          <Link to="/main/friend">朋友</Link>
          <Link to="/main/my">我的</Link>
        </div>
      </div>
    );
  }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
