import { CoverView, CoverImage } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from 'src/store';
import styles from './index.module.scss';

const CustomTabbar = () => {
  const dispatch = useDispatch();
  const {currentTabbarIndex}=useSelector((state:RootState)=>state.tabbar)
  console.log(currentTabbarIndex,'currentTabbarIndex');
  

  const list = [
    {
      id:1,
      pagePath: '/pages/home/home',
      iconPath: '',
      selectedIconPath: '',
      text: '首页',
    },
    {
      id:2,
      pagePath: '/pages/statistical/statistical',
      iconPath: '',
      selectedIconPath: '',
      text: '统计',
    },
  ];
  const handleClick = (item):void => {
    Taro.switchTab({
      url:item.pagePath
    })
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
            <CoverImage className={styles.item} src={item.iconPath} />
            <CoverView className={styles.item}>{item.text}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
