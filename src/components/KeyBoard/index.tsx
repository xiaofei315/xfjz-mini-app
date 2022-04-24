import { key } from '@/constants/enums';
import dayjs from 'dayjs';
import { View,Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

interface IProps {
  date: number;
  time: number;
  onDateChange: () => void;
  onDelete: () => void;
  onFinish: () => void;
  onNumberChange: (v: any) => void;
  onTimeChange: () => void;
  onAddressChange: () => void;
}

const KeyBoard = ({
  date,
  time,
  onDateChange,
  onDelete,
  onFinish,
  onNumberChange,
  onTimeChange,
  onAddressChange,
}: IProps) => {
  const handleClick = (v) => {
    Taro.vibrateShort();
    if (v.type === 'date') {
      onDateChange();
      return;
    }
    if (v.type === 'time') {
      onTimeChange();
      return;
    }
    if (v.type === 'address') {
      onAddressChange();
      return;
    }

    if (v.type === 'delete') {
      onDelete();
      return;
    }
    if (v.type === 'finish') {
      onFinish();
      return;
    }
    onNumberChange(v.value);
  };

  const renderKey = (item: any) => {
    if (item.type && item.type === 'date') {
      console.log('date', date);
      // return date ? dayjs(date).format('MM-DD') : item.name;
      return date ? (
        <Picker mode="date" onChange={onTimeChange}>
          <View className="picker">{date}</View>
        </Picker>
      ) : (
        item.name
      );
    }
    if (item.type && item.type === 'time') {
      console.log('time', time);
      // return time ? dayjs(time).format('HH:MM') : item.name;
      return time ? (
        <Picker mode="time" onChange={onDateChange}>
          <View className="picker">{time}</View>
        </Picker>
      ) : (
        item.name
      );
    }
    return item.name;
  };

  return (
    <View className={styles.inputContainer}>
      <View className={styles.keyBoard}>
        {key.map((item) => {
          return (
            <View key={item.name} className={styles.item}>
              <View className={styles.name} onClick={() => handleClick(item)}>
                {renderKey(item,onclick)}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default KeyBoard;
