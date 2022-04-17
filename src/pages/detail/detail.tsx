import { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';
import Cost from '@/components/SelectList/Cost';

interface IState {
  records: Array<any>;
}
interface IProps {}
export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={styles.container}>
        <View className={styles.text}>123123</View>
        <Cost />
      </View>
    );
  }
}
