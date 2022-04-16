import { useState, useEffect } from 'react';
import { CoverView, CoverImage } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { RootState } from 'src/store';
import list from './data';

import styles from './index.module.scss';

const CustomTabbar = () => {
  const flag = Taro.getStorageSync('isLogin');

  const [isLogin, setLogin] = useState<Boolean>();

  useEffect(() => {
    setLogin(flag);
  }, []);

  const dispatch = useDispatch();

  const { currentTabbarIndex } = useSelector(
    (state: RootState) => state.tabbar
  );

  const handleClick = (item): void => {
    if (!isLogin) {
      Taro.getUserProfile({
        desc: '登录',
        success: (res) => {
          console.log(res);
          setLogin(true);
          Taro.setStorageSync('isLogin', true);
          Taro.setStorageSync('userInfo', res.userInfo);
        },
        fail: (err) => {
          console.log(err);
          Taro.showToast({
            title: '取消登录',
            icon: 'none',
            duration: 2000,
          });
        },
      });
    } else {
      if (currentTabbarIndex === item.id && item.id === 3) {
        Taro.navigateTo({
          url: '/packages/add/add',
        });
        return;
      }

      if (currentTabbarIndex === item.id) {
        return;
      }

      Taro.switchTab({
        url: item.pagePath,
      });

      dispatch.tabbar.save({ currentTabbarIndex: item.id });
    }
  };

  return (
    <CoverView className={styles.container}>
      {list.map((item) => {
        return (
          <CoverView
            key={item.id}
            className={styles.itemWrap}
            onClick={() => handleClick(item)}
          >
            <CoverImage
              className={cn(styles.icon, {
                [styles.home]: item.id === 3,
              })}
              src={
                currentTabbarIndex === item.id
                  ? item.selectedIconPath
                  : item.iconPath
              }
            />
            <CoverView
              className={cn(styles.text, {
                [styles.select]: currentTabbarIndex === item.id,
              })}
            >
              {item?.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
