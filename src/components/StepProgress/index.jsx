// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import style from './style.module.scss';

const StepProgressFlow = {
  step: Number,
};

const StepProgress: React.FC<StepProgressFlow> = memo((props) => {
  const { step } = props;
  return (
    <div className={style.stepProgress}>
      <div className={style.title}>結帳</div>
      <div className={style.progressBlock}>
        <div className={`${style.item} ${step === 1 ? style.active : ''}`}>
          <div className={style.number}>1</div>
          寄送地址
        </div>
        <span className={style.connectLine} />
        <div className={`${style.item} ${step === 2 ? style.active : ''}`}>
          <div className={style.number}>2</div>
          運送方式
        </div>
        <span className={style.connectLine} />
        <div className={`${style.item} ${step === 3 ? style.active : ''}`}>
          <div className={style.number}>3</div>
          付款資訊
        </div>
      </div>
    </div>
  );
});

export default StepProgress;
