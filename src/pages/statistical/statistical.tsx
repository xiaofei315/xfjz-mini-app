import {View, Text} from '@tarojs/components';
import styles from './index.module.scss';
import Taro from '@tarojs/taro';
import {useNavigatorText} from '@/hooks/useNavigatorText';

const Index = () => {
  useNavigatorText('统计')
  const handleClick = () => {
    Taro.cloud.callFunction({
      name: 'addRecord',
      data: {
        collectionName: 'o5UGe5PyArEwT5midLgDSUv6H1Qg',
        title: '奶茶',
        type: 1,
        date: '2022-4-19',
        time: '10:00',
        cost: 30,
        address: [23, 33],
      },
      success: (res) => {
        console.log(res);
      },
    });
  };
  const handleSelect = () => {
    Taro.cloud.callFunction({
      name: 'selectRecords',
      data: {
        collectionName: 'o5UGe5PyArEwT5midLgDSUv6H1Qg',
      },
      success: (res) => {
        console.log(res);
      },
    });
  };
  return (
    <View className="index">
      <Text className={styles.text} onClick={handleClick}>
        统计
      </Text>
      <Text className={styles.text} onClick={handleSelect}>
        查询
      </Text>
    </View>
  );
};

export default Index;
