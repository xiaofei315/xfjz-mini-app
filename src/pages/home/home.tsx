import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick = () => {
    Taro.cloud
    .callFunction({
      name: "login",
    })
    .then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <View className='index'>
        <Text className={styles.text}>Hello world!</Text>
        <AtButton type='primary' onClick={this.handleClick}>
          点我
        </AtButton>
      </View>
    );
  }
}
