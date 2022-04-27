import { Button, View } from '@tarojs/components';
import {useState, useContext, useEffect} from 'react';
import ItemList from '@/components/ItemList';
import { costType, incoming,IItem } from '@/constants/enums';
import {addContext,initialData} from '../../context/addContext'
import KeyBoard from '@/components/KeyBoard';

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
  const [currentTab, setCurrentTab] = useState(0);
  const [chooseType, setChooseType] = useState<IItem>({
    id: '',
    type: '',
    subType: '',
    name: '',
  });
  const [mask, setMask] = useState(false);

  // 提交的二次确认
  const [showModel, setShowModel] = useState(false);

  const context=useContext(addContext)

  useEffect(()=>{
    context.data=initialData
  },[chooseType])

  const handleTabClick = (v:number) => {
    setCurrentTab(v);
  };

const handleCloseMask=()=>{
  setMask(false)
}

  const handlePaymentClick = (v:IItem) => {
    console.log(v);
    setChooseType(v)
    context.data.type=v
    setMask(true);
  };

  // 二次确认
  const handleModelCancel = () => {
    setShowModel(false);
  };

  const handleModelConfirm = () => {
    setShowModel(false);
    console.log('完成');
  };

  return (
    <addContext.Provider value={{data: context.data}}>
      <View className={styles.container}>
        <AtTabs current={currentTab} tabList={tabList} onClick={handleTabClick}>
          <AtTabsPane current={currentTab} index={0}>
            <ItemList data={costType} chooseType={chooseType} onClick={handlePaymentClick} />
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <ItemList data={incoming} chooseType={chooseType} onClick={handlePaymentClick} />
          </AtTabsPane>
        </AtTabs>
      </View>

      <AtModal isOpened={showModel}>
        <AtModalHeader>提交</AtModalHeader>
        <AtModalContent>是否确认提交</AtModalContent>
        <AtModalAction>
          <Button onClick={handleModelCancel}>取消</Button>
          <Button onClick={handleModelConfirm}>确定</Button>
        </AtModalAction>
      </AtModal>
      <KeyBoard isShowKeyboard={mask} onCloseMask={handleCloseMask} />
    </addContext.Provider>
  );
};
export default Index;
