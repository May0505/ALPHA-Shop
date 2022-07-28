// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from './style.module.scss';
import { LineItem } from '../LineItem/index';

type CartFlow = {
  data: Array,
  setData: Function,
};

export const Cart: React.FC<CartFlow> = (props) => {
  const { data, setData } = props;
  const line = data.map((item) => {
    return <LineItem item={item} setData={setData} key={item.id} />;
  });

  return (
    <div className={style.cart}>
      <div className={style.title}>購物籃</div>
      {line}
      <div className={style.deliveryFeeBlock}>
        <p className={style.title}>運費</p>
        <p className={style.content}>免費</p>
      </div>
      <div className={style.totalBlock}>
        <p className={style.title}>小計</p>
        <p className={style.content}>$5,290</p>
      </div>
    </div>
  );
};
