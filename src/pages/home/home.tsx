import { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Taro.cloud.callFunction({
      name: 'createCollection',
      data: {
        name:'test'
      },
      success: () =>{
        console.log('success');
      },
      fail: () =>{
        console.log('fail');
      }
    })
    const isLogin = Taro.getStorageSync('isLogin');
    if (isLogin) {
      dispatch.global.save({ isLogin: true });
      console.log(123);
      
    } else {
      console.log(456);

      Taro.getUserProfile({
        desc: '登录',
        success: (res) => {
          console.log(res);
          Taro.setStorageSync('isLogin', true);
          Taro.setStorageSync('userInfo', res.userInfo);
        },
      });
    }
  }, []);

  return (
    <View className="index">
      <Text className={styles.text}>首页</Text>
    </View>
  );
};
export default Index;
