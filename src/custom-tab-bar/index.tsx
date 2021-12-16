import { CoverView, CoverImage } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames'
import { RootState } from 'src/store';
import add from '@/assets/tabbar/add.png'
import addCheck from '@/assets/tabbar/add_check.png'
import center from '@/assets/tabbar/center.png'
import centerCheck from '@/assets/tabbar/center_check.png'
import detail from '@/assets/tabbar/detail.png'
import detailCheck from '@/assets/tabbar/detail_check.png'
import footPrint from '@/assets/tabbar/footprint.png'
import footPrintCheck from '@/assets/tabbar/footprint_check.png'
import statistics from '@/assets/tabbar/statistics.png'
import statisticsCheck from '@/assets/tabbar/statistics_check.png'
import styles from './index.module.scss';

const CustomTabbar = () => {
  const dispatch = useDispatch();
  const { currentTabbarIndex } = useSelector(
    (state: RootState) => state.tabbar
  );
  console.log(currentTabbarIndex, 'currentTabbarIndex');

  const list = [
    {
      id: 1,
      pagePath: '/pages/detail/detail',
      iconPath: detail,
      selectedIconPath: detailCheck,
      text: '明细',
    },
    {
      id: 2,
      pagePath: '/pages/statistical/statistical',
      iconPath: statistics,
      selectedIconPath: statisticsCheck,
      text: '统计',
    },
    {
      id: 3,
      pagePath: '/pages/home/home',
      iconPath: add,
      selectedIconPath: addCheck,
    },
    {
      id: 4,
      pagePath: '/pages/footprint/footprint',
      iconPath: footPrint,
      selectedIconPath: footPrintCheck,
      text: '足迹',
    },
    {
      id: 5,
      pagePath: '/pages/center/center',
      iconPath: center,
      selectedIconPath: centerCheck,
      text: '我的',
    },
  ];
  const handleClick = (item): void => {
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
            <CoverImage className={styles.icon} src={currentTabbarIndex ===item.id? item.selectedIconPath:item.iconPath} />
            <CoverView className={cn(styles.text,{[styles.select]:currentTabbarIndex ===item.id})}>{item?.text}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
