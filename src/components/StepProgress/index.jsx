// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';

const StepProgressFlow = {
  step: Number,
};

export const StepProgress: React.FC<StepProgressFlow> = (props) => {
  const { step } = props;
  return (
    <div className="stepProgress">
      <div className="title">結帳</div>
      <div className="progressBlock">
        <div className={step === 1 ? 'activeitem' : 'item'}>
          <div className={step === 1 ? 'activeNumber' : 'number'}>1</div>
          寄送地址
        </div>
        <span className="connectLine" />
        <div className={step === 2 ? 'activeitem' : 'item'}>
          <div className={step === 2 ? 'activeNumber' : 'number'}>2</div>
          運送方式
        </div>
        <span className="connectLine" />
        <div className={step === 3 ? 'activeitem' : 'item'}>
          <div className={step === 3 ? 'activeNumber' : 'number'}>3</div>
          付款資訊
        </div>
      </div>
    </div>
  );
};
