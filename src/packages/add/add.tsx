import { Button, View } from '@tarojs/components';
import { useState } from 'react';
import ItemList from '@/components/ItemList';
import { costType, incoming } from '@/constants/enums';
import { AtActionSheet } from 'taro-ui';

import {
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtTabs,
  AtTabsPane,
} from 'taro-ui';
import styles from './index.module.scss';
import Taro from '@tarojs/taro';

const tabList = [{ title: '支出' }, { title: '收入' }];

const Index = () => {
  // const [date, setDate] = useState(0);
  // const [time, setTime] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const [mask, setMask] = useState(false);

  const [showModel, setShowModel] = useState(false);

  const handleTabClick = (v) => {
    setCurrentTab(v);
  };

  const handlePaymentClick = (v) => {
    console.log(v);
    setMask(true);
  };

  // 完成

  // 二次确认
  const handleModelCancel = () => {
    setShowModel(false);
  };
  const handleModelConfirm = () => {
    setShowModel(false);
    console.log('完成');
  };

  // 蒙版

  const handleCancel = () => {};
  const handleClose = () => {
    setMask(false);
  };
  const handleClick = () => {
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
    });
  };

  return (
    <>
      <View className={styles.container}>
        <AtTabs current={currentTab} tabList={tabList} onClick={handleTabClick}>
          <AtTabsPane current={currentTab} index={0}>
            <ItemList data={costType} onClick={handlePaymentClick} />
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <ItemList data={incoming} onClick={handlePaymentClick} />
          </AtTabsPane>
        </AtTabs>
      </View>

      <AtModal isOpened={showModel}>
        <AtModalHeader>提交</AtModalHeader>
        <AtModalContent>是否确认提交</AtModalContent>
        <AtModalAction>
          <Button onClick={handleModelCancel}>取消</Button>{' '}
          <Button onClick={handleModelConfirm}>确定</Button>
        </AtModalAction>
      </AtModal>

      <AtActionSheet
        isOpened={mask}
        // cancelText="取消"
        // title="头部标题可以用通过转义字符换行"
        onCancel={handleCancel}
        onClose={handleClose}
      >
        <View style={{ width: '100%', height: '300px' }}>123</View>
      </AtActionSheet>
    </>
  );
};
export default Index;
