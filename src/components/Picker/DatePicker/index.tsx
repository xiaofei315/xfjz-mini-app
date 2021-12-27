import { CoverView } from '@tarojs/components';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AtCalendar } from 'taro-ui';
import styles from './index.module.scss';

const DatePicker = ({ onConfirm, onCancel, value }) => {
  const [currentDate, setCurrentDate] = useState();

  const handleClickDate = (v) => {
    console.log('currentDate',v);
    
    setCurrentDate(() => v.value);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleConfirm = () => {
    console.log('dayjs(currentDate).valueOf()',dayjs(currentDate).valueOf());
    
    currentDate
      ? onConfirm(dayjs(currentDate).valueOf())
      : onConfirm(dayjs().valueOf());
  };
  return (
    <CoverView className={styles.container}>
      <CoverView className={styles.calendarWrap}>
        <CoverView className={styles.buttonContainer}>
          <CoverView className={styles.buttonLeft} onClick={handleCancel}>
            取消
          </CoverView>
          <CoverView className={styles.buttonRight} onClick={handleConfirm}>
            确认
          </CoverView>
        </CoverView>
        <AtCalendar currentDate={value}  onDayClick={handleClickDate} />
      </CoverView>
    </CoverView>
  );
};
export default DatePicker;
