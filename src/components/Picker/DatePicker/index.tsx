import { View } from '@tarojs/components';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AtCalendar } from 'taro-ui';
import Mask from '@/components/Mask';
import styles from './index.module.scss';

const DatePicker = ({ onConfirm, onCancel, value }) => {
  const [currentDate, setCurrentDate] = useState();

  const handleClickDate = (v) => {
    console.log('currentDate', v);

    setCurrentDate(() => v.value);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleConfirm = () => {
    console.log('dayjs(currentDate).valueOf()', dayjs(currentDate).valueOf());

    currentDate
      ? onConfirm(dayjs(currentDate).valueOf())
      : onConfirm(dayjs().valueOf());
  };
  return (
    <Mask>
      1223333
      <View className={styles.container}>
        <View className={styles.calendarWrap}>
          <View className={styles.buttonContainer}>
            <View className={styles.buttonLeft} onClick={handleCancel}>
              取消
            </View>
            <View className={styles.buttonRight} onClick={handleConfirm}>
              确认
            </View>
          </View>
          {/* <AtCalendar currentDate={value} onDayClick={handleClickDate} /> */}
        </View>
      </View>
    </Mask>
  );
};
export default DatePicker;
