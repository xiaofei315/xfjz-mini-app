import { keyList, Ikey } from './keys';
import { useState, useContext } from 'react';
import { Input, View, Text } from '@tarojs/components';
import dayjs from 'dayjs';
import { AtActionSheet } from 'taro-ui';
import Taro from '@tarojs/taro';
import { addContext, ILocation } from '../../context/addContext';
import Key from '../Key';
import styles from './index.module.scss';

interface IProps {
  isShowKeyboard: boolean;
  onCloseMask: () => void;
}

const KeyBoard = ({ isShowKeyboard, onCloseMask }: IProps) => {
  const context = useContext(addContext);
  // 计算价钱
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  //地址
  const [location, setLocation] = useState<ILocation>({
    address: '',
    errMsg: '',
    latitude: 0,
    longitude: 0,
    name: '',
  });

  const handleClick = (item: Ikey) => {
    Taro.vibrateShort().then(() => {});
    // 提交
    if (item.value == 'finish') {
      handleCalc();
      let result = {
        ...context.data,
        date: dayjs(context.data.date).format('YYYY-MM-DD'),
      };
      console.log(result);

      // Taro.cloud.callFunction({
      //   name: 'addRecord',
      //   data: {
      //     collectionName: 'o5UGe5PyArEwT5midLgDSUv6H1Qg',

      //   },
      //   success: (res) => {
      //     console.log(res);
      //   },
      // });
      return;
    }
    // 删除
    if (item.value == 'delete') {
      if (amount == result) {
        Taro.showModal({
          title: '提示',
          content: '是否删除计算结果',
          success: function (res) {
            if (res.confirm) {
              // console.log('用户点击确定')
              setResult('0');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          },
        });
        return;
      }
      setAmount((oldValue) => oldValue.substring(0, oldValue.length - 1));
      return;
    }

    setAmount((oldValue) => '' + oldValue + item.value);
  };

  // 计算
  const handleCalc = () => {
    let num = amount.split('+');
    if (num[0] && !num[1]) {
      setResult(num[0]);
      setAmount(num[0].toString() + '+');
      return;
    }
    if (!num[1]) return;
    let temp = num.reduce((prev, cur) => Number(prev) + Number(cur), 0);
    setResult(temp.toString());
    setAmount(temp.toString() + '+');
    context.data.amount = temp;
  };

  // 选择地址
  const handleLocation = () => {
    Taro.chooseLocation({
      success: (res) => {
        console.log(res);
        setLocation(res);
        context.data.location = res;
      },
    });
  };

  return (
    <AtActionSheet
      isOpened={isShowKeyboard}
      onCancel={onCloseMask}
      onClose={onCloseMask}
    >
      <View className={styles.container}>
        <View className={styles.valueWrap} onClick={handleLocation}>
          <Text>位置:</Text>
          <View className={styles.address}>
            {location?.name || location?.address}
          </View>
        </View>

        <View className={styles.desc}>
          <Text>备注:</Text>
          <Input className={styles.input} maxlength={20} />
        </View>
        <View className={styles.valueWrap}>
          <Text>金额:</Text>
          <View className={styles.amount}>{amount}</View>
          <View className={styles.btn} onClick={handleCalc}>
            =
          </View>
          <View className={styles.value}>{result}</View>
        </View>
        <View className={styles.keyBoard}>
          {keyList.map((item, index) => {
            return (
              <Key
                key={index}
                type={item.type}
                name={item.name}
                onClick={() => handleClick(item)}
              />
            );
          })}
        </View>
      </View>
    </AtActionSheet>
  );
};

export default KeyBoard;
