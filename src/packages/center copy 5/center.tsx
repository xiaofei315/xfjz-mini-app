import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  render() {
    return (
      <View className='index'>
        <Text className={styles.text}>我的</Text>
      </View>
    );
  }
}
