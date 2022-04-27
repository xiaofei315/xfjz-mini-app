import {View} from '@tarojs/components';
import {useNavigatorText} from "@/hooks/useNavigatorText";
import styles from './index.module.scss';


const Index = () => {
  useNavigatorText('详情');

  return (
    <View className={styles.container}>
      详情详情详情详情
    </View>
  );
};

export default Index;
