// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './style.scss';

export const Step2 = () => {
  const [checked, setChecked] = useState('標準運送');
  const atClick = (item) => {
    setChecked(item);
  };
  const optionList = [
    { name: '標準運送', content: '約 3~7 個工作天', fee: '免費' },
    { name: 'DHL 貨運', content: '48 小時內送達', fee: '$500' },
  ];
  const option = optionList.map((item) => {
    return (
      <div
        className={checked === item.name ? 'row checked' : 'row'}
        key={`${item.name}1`}
      >
        <input
          readOnly
          checked={checked === item.name}
          name="delivery"
          type="radio"
          onClick={() => atClick(item.name)}
        />
        <div className="radioLeft">
          <label>{item.name}</label>
          <label>{item.content}</label>
        </div>
        <label>{item.fee}</label>
      </div>
    );
  });

  return (
    <div className="form">
      <div className="title">運送方式</div>
      {option}
    </div>
  );
};
