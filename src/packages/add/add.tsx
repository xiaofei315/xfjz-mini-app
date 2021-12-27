import { View } from '@tarojs/components';
import dayjs from 'dayjs';
import { useState } from 'react';
import { KeyBoard, PaymentTypePicker, DatePicker } from '@/components/index';
import { paymentType, incomingType } from '@/constants/enums';
import { AtTabs, AtTabsPane } from 'taro-ui';
import styles from './index.module.scss';

const tabList = [{ title: '支出' }, { title: '收入' }];

const Index = () => {
  // const [selectItem, setSelectItem] = useState();
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(0);

  const [isShowDatePicker, setShowDatePicker] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (v) => {
    setCurrentTab(v);
  };

  const handlePaymentClick = (v) => {
    console.log(v);
  };

  const handleNumberChange = (v) => {
    console.log(v);
  };

  const handleDateChange = () => {
    setShowDatePicker(true);
  };

  const handleTimeChange = () => {
    console.log('时间');
  };

  const handleAddresses = () => {
    console.log('地址');
  };

  const handleDelete = () => {
    console.log('删除');
  };

  const handleFinish = () => {
    console.log('完成');
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (v) => {
    setShowDatePicker(false);
    setDate(v);
  };
  return (
    <View className={styles.container}>
      <AtTabs current={currentTab} tabList={tabList} onClick={handleTabClick}>
        <AtTabsPane current={currentTab} index={0}>
          <PaymentTypePicker data={paymentType} onClick={handlePaymentClick} />
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={1}>
          <PaymentTypePicker data={incomingType} onClick={handlePaymentClick} />
        </AtTabsPane>
      </AtTabs>
      <KeyBoard
        date={date}
        time={time}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onAddressChange={handleAddresses}
        onDelete={handleDelete}
        onFinish={handleFinish}
        onNumberChange={handleNumberChange}
      />
      {isShowDatePicker && (
        <DatePicker value={date} onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </View>
  );
};
export default Index;
