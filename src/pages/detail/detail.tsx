import { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

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

  componentDidMount() {
    console.log(123123123);

    Taro.cloud.callFunction({
      name: 'createCollection',
      data: {
        name: 'hello',
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      },
    });

    // Taro.cloud
    //   .database()
    //   .collection('todos')
    //   .get()
    //   .then((res) => {
    //     this.setState({
    //       records: res?.data,
    //     });
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { records } = this.state;
    return (
      <View className={styles.container}>
        {/* {records.map((item, index) => {
          return (
            <View key={index} className={styles.card}>
              <View className={styles.title}>{item?.name}</View>
              <View className={styles.value}>{item?.cost}</View>
              <View className={styles.value}>{item?.title}</View>
              <View className={styles.value}>{item?.age}</View>
            </View>
          );
        })} */}
      </View>
    );
  }
}
