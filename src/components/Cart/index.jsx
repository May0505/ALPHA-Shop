// eslint-disable-next-line no-unused-vars
import React, { memo, useContext, useState, useEffect } from 'react';
import style from './style.module.scss';
import LineItem from '../LineItem/index';
import CartContext from '../CartContext';

type CartFlow = {
  data: Array,
  setData: Function,
};

const Cart: React.FC<CartFlow> = memo(() => {
  const data = useContext(CartContext);
  const [products, setProducts] = useState(data.data);
  const [total, setTotal] = useState(0);
  const updateProducts = (id, qty) => {
    const newProducts = products.map((item) => {
      if (item.id === id && qty + item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity + qty,
        };
      }
      return item;
    });
    return setProducts(newProducts);
  };
  const line = products.map((item) => {
    return (
      <LineItem item={item} updateProducts={updateProducts} key={item.id} />
    );
  });
  useEffect(() => {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [products]);
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
        <p className={style.content}>${total}</p>
      </div>
    </div>
  );
});

export default Cart;
