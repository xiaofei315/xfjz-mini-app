import { keyList, Ikey } from './keys';
import { useState } from 'react';
import { Input, View, Text } from '@tarojs/components';
import Key from '../Key';
import styles from './index.module.scss';
import { AtActionSheet } from 'taro-ui';
import Taro from '@tarojs/taro';

interface IProps {
  isShowKeyboard: boolean;
  onCloseMask: () => void;
}

const KeyBoard = ({ isShowKeyboard, onCloseMask }: IProps) => {
  // const [mask, setMask] = useState(false);
  // const [mask2, setMask2] = useState(false);
  const [amount, setAmount] = useState('');
  const [hasAdd, setHasAdd] = useState(false);
  const [result, setResult] = useState('');

  // const handleMask = () => {
  //   setMask(true)
  // }
  const handleChange = (v: number | string) => {
    console.log(v);
  };
  const handleClick = (item: Ikey) => {
    Taro.vibrateShort().then(() => {
      console.log(item.value);
    });
    if (item.value == 'delete') {
      if ((result && amount[amount.length - 1] == '+') || (result && !hasAdd)) {
        setHasAdd(false);
        setResult('');
        setAmount('');
      }
      let tempVal = item.value.slice(-1);
      // setAmount(item.value)
      setAmount((oldValue) => oldValue.substring(0, oldValue.length - 1));
      if (tempVal == '+') {
        setHasAdd(false);
      }
      if (!amount) {
        setHasAdd(false);
        setResult('0');
      }
      return;
    }
    if (item.value == '+') {
      if (!hasAdd) {
        setAmount((oldValue) => '' + oldValue + item.value);
        setHasAdd(true);
        return;
      }
      if (hasAdd) {
        handleCalc();
        return;
      }
    }
    if (result) {
      if (item.value === '+') {
        setHasAdd(true);
        return;
      }
      if (item.value !== '+' && !hasAdd) {
        return;
      }
    }
    setAmount((oldValue) => '' + oldValue + item.value);
  };
  const handleCalc = () => {
    let num = amount.split('+');
    let temp = Number(num[0]) + Number(num[1] || 0);
    setResult(temp.toString());
    setAmount(temp.toString());
    setHasAdd(false);
  };
  return (
    <>
      {/* <View onClick={handleMask}>点我</View> */}
      <AtActionSheet
        isOpened={isShowKeyboard}
        onCancel={onCloseMask}
        onClose={onCloseMask}
      >
        <View className={styles.container}>
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
    </>
  );
};

export default KeyBoard;
