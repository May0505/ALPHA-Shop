// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from './style.module.scss';

export const Step3 = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>付款資訊</div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w350}`}>
          <label className={style.name}>持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>
      </div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w350}`}>
          <label className={style.name}>卡號</label>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
      </div>
      <div className={style.formRow}>
        <div className={`${style.formItem} ${style.w255}`}>
          <label className={style.name}>有效期限</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className={`${style.formItem} ${style.w255}`}>
          <label className={style.name}>CVC / CCV</label>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </div>
  );
};
