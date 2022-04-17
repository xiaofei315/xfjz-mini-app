import React from 'react';
import cn from 'classnames';
import { costType } from '@/constants/enums';
import { Swiper, SwiperItem, View } from '@tarojs/components';
import styles from './index.module.scss';

function Index() {
  const handleClick = (v) => {
    console.log(v);
  };
  let totalPage = Math.ceil(costType.length / 12);

  let newList: any[] = [];
  for (let i = 1; i < totalPage + 1; i++) {
    newList.push(costType.slice((i - 1) * 12, i * 12));
  }
  return (
    <View className={styles.container}>
      <Swiper
        className={styles.swiperWrap}
        indicatorColor="#cecece"
        indicatorActiveColor="#346fc2"
        indicatorDots={totalPage > 1}
      >
        {newList.map((item) => {
          return (
            <SwiperItem key={item.id} className={styles.swiperItem}>
              <View className={styles.listWrap}>
                {item.map((ele) => {
                  return (
                    <View
                      key={ele.id}
                      className={styles.itemWrap}
                      onClick={() => handleClick(ele)}
                    >
                      <View className={cn(styles.item)}>{ele.name}</View>
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
}

export default Index;
