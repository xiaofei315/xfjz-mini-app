import { Component } from 'react';
import { View } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import { costType, incoming } from '@/constants/enums';

import styles from './index.module.scss';
import ItemList from '@/components/ItemList';
import { AtTabs, AtTabsPane } from 'taro-ui';

const tabList = [{ title: '支出' }, { title: '收入' }];

const Index = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (v) => {
    setCurrentTab(v);
  };
  const handlePaymentClick = (v) => {
    console.log(v);
  };
  return (
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
  );
};

export default Index;
