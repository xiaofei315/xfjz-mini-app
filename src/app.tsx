import { Component } from 'react';
import { Provider } from 'react-redux';
import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss';
import store from './store';


class App extends Component {
  componentDidMount() {

    Taro.cloud.init({
      env: 'account-dev-4gls3cdk24659538',
      traceUser: true,
    });

  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        {/* <View className={styles.container}>{this.props.children}</View> */}
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
