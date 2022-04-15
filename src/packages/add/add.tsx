import { Button, View } from '@tarojs/components';
import dayjs from 'dayjs';
import { useState } from 'react';
import { KeyBoard, PaymentTypePicker, DatePicker } from '@/components/index';
import { paymentType, incomingType } from '@/constants/enums';
import {
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtTabs,
  AtTabsPane,
} from 'taro-ui';
import styles from './index.module.scss';

const tabList = [{ title: '支出' }, { title: '收入' }];

const Index = () => {
  // const [selectItem, setSelectItem] = useState();
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(0);

  const [isShowDatePicker, setShowDatePicker] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const [showModel, setShowModel] = useState(false);

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

  // 完成
  const handleFinish = () => {
    setShowModel(true);
  };
  // 二次确认
  const handleModelCancel = () => {
    setShowModel(false);
  };
  const handleModelConfirm = () => {
    setShowModel(false);
    console.log('完成');
  };

  console.log('isShowDatePicker',isShowDatePicker);
  
  //
  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const handleConfirm = (v) => {
    setShowDatePicker(false);
    setDate(v);
  };
  return (
    <>
      <View className={styles.container}>
        <AtTabs current={currentTab} tabList={tabList} onClick={handleTabClick}>
          <AtTabsPane current={currentTab} index={0}>
            <PaymentTypePicker
              data={paymentType}
              onClick={handlePaymentClick}
            />
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <PaymentTypePicker
              data={incomingType}
              onClick={handlePaymentClick}
            />
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
            <DatePicker
              value={date}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
        )}
      </View>

      <AtModal isOpened={showModel}>
        <AtModalHeader>提交</AtModalHeader>
        <AtModalContent>是否确认提交</AtModalContent>
        <AtModalAction>
          <Button onClick={handleModelCancel}>取消</Button>{' '}
          <Button onClick={handleModelConfirm}>确定</Button>
        </AtModalAction>
      </AtModal>
    </>
  );
};
export default Index;
