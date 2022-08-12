// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import style from './style.module.scss';

type LineItemFlow = {
  item: Object,
  updateProducts: Function,
};

const LineItem: React.FC<LineItemFlow> = memo((props) => {
  const { item, updateProducts } = props;
  const atUpdateQty = (id, qty) => {
    updateProducts(id, qty);
  };
  return (
    <div className={style.lineitem}>
      <img className={style.lineitemImg} src={item.img} alt="" />
      <div className={style.rightBlock}>
        <div className={style.title}>
          <div className={style.text}>{item.name}</div>
          <div className={style.price}>{item.price}</div>
        </div>
        <div className={style.count}>
          <button
            className={style.minus}
            onClick={() => {
              atUpdateQty(item.id, -1);
            }}
          >
            -
          </button>
          <div className={style.number}>{item.quantity}</div>
          <button
            className={style.plus}
            onClick={() => {
              atUpdateQty(item.id, 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
});

export default LineItem;
