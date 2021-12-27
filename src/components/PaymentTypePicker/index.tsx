import { Swiper, SwiperItem, View } from '@tarojs/components';
import cn from 'classnames';
import { useState } from 'react';

import styles from './index.module.scss';

interface IProps {
  data: any;
  onClick: (V) => void;
}

const PaymentTypePicker = ({ onClick, data }: IProps) => {
  const [selectItem, setSelectItem] = useState();

  const handleClick = (v) => {
    onClick(v);
    setSelectItem(v.id);
  };

  let paymentTypeList: any[] = [];
  data.data.map((item) => {
    item.list.map((ele) => paymentTypeList.push(ele));
  });

  let totalPage = Math.ceil(paymentTypeList.length / 12);

  let newList: any[] = [];
  for (let i = 1; i < totalPage + 1; i++) {
    newList.push(paymentTypeList.slice((i - 1) * 12, i * 12));
  }

  return (
    <View className={styles.container}>
      <Swiper
        className={styles.swiperWrap}
        indicatorColor='#cecece'
        indicatorActiveColor='#346fc2'
        indicatorDots={totalPage > 1}
      >
        {newList.map((material) => {
          return (
            <SwiperItem key={material.type} className={styles.swiperItem}>
              <View className={styles.listWrap}>
                {material.map((item) => {
                  return (
                    <View
                      key={item.id}
                      className={styles.itemWrap}
                      onClick={() => handleClick(item)}
                    >
                      <View
                        className={cn(styles.item, {
                          [styles.select]: item.id === selectItem,
                        })}
                      >
                        {item.name}
                      </View>
                    </View>
                  );
                })}
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
};
export default PaymentTypePicker;
