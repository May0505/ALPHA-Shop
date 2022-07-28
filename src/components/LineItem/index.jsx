// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from './style.module.scss';

type LineItemFlow = {
  item: Object,
  setData: Function,
};

export const LineItem: React.FC<LineItemFlow> = (props) => {
  const { item } = props;
  return (
    <div className={style.lineitem}>
      <img className={style.lineitemImg} src={item.img} alt="" />
      <div className={style.rightBlock}>
        <div className={style.title}>
          <div className={style.text}>{item.name}</div>
          <div className={style.price}>{item.price}</div>
        </div>
        <div className={style.count}>
          <button className={style.minus}>-</button>
          <div className={style.number}>{item.quantity}</div>
          <button className={style.plus}>+</button>
        </div>
      </div>
    </div>
  );
};
