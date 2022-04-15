import { CoverView, CoverImage } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { RootState } from 'src/store';
import list from './data';

import styles from './index.module.scss';

const CustomTabbar = () => {
  const dispatch = useDispatch();
  const { currentTabbarIndex } = useSelector(
    (state: RootState) => state.tabbar
  );

  const handleClick = (item): void => {
    Taro.getStorage({ key: 'userInfo' }).then((res) => {
      if (!res) {
        Taro.getUserProfile({
          desc: '用于完善会员资料', 
          success: (res) => {
            Taro.setStorage({
              key: 'userInfo',
              data: res.userInfo,
            });
            console.log(res, 'res');
            Taro.cloud
              .callFunction({
                name: 'login',
              })
              .then((res) => console.log(res));
          },
          fail: () => {
            Taro.showToast({
              title: '请先登录',
              icon: 'none',
              duration: 2000,
            });
          },
        });
      }
    });
  

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
