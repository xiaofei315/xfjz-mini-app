import {View} from '@tarojs/components';
import styles from './index.module.scss';
import {useNavigatorText} from '@/hooks/useNavigatorText'

const Index = () => {
  useNavigatorText('详情')
  return <View className={styles.container}>详情</View>;
};
export default Index;
