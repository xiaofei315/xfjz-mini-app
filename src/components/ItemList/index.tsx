import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { addContext, initialData } from '../../context/addContext';
import { Swiper, SwiperItem, View } from '@tarojs/components';
import styles from './index.module.scss';
import { IItem } from '@/constants/enums';

function Index({ data, onClick }) {
  const [chooseType, setChooseType] = useState<IItem>({
    id: '',
    type: '',
    subType: '',
    name: '',
  });
  const context = useContext(addContext);

  const handleClick = (v: IItem) => {
    context.data.type = v;
    setChooseType(v);
    onClick(v);
  };

  useEffect(() => {
    context.data = initialData;
  }, [chooseType.id]);

  // 分页
  let totalPage = Math.ceil(data.length / 12);
  let newList: any[] = [];
  for (let i = 1; i < totalPage + 1; i++) {
    newList.push(data.slice((i - 1) * 12, i * 12));
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
                {item.map((ele: IItem) => {
                  return (
                    <View
                      key={ele.id}
                      className={styles.itemWrap}
                      onClick={() => handleClick(ele)}
                    >
                      <View
                        className={cn(styles.item, {
                          [styles.select]: chooseType.id == item.id,
                        })}
                      >
                        {ele.name}
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
}

export default Index;
