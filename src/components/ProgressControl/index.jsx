// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import style from './style.module.scss';
import arrowLeft from '../../assets/img/arrowLeft.svg';
import arrowRight from '../../assets/img/arrowRight.svg';

type ProgressControlFlow = {
  step: Number,
  setStep: Function,
};

const ProgressControl: React.FC<ProgressControlFlow> = memo((props) => {
  const { step, setStep } = props;
  let previousText;
  let nextText = '下一步';
  let previusArrow;
  let nextArrow = <img src={arrowRight} alt="" />;

  const clickNext = () => {
    if (step === 3) return;
    setStep(step + 1);
  };
  const clickPrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
  if (step === 2 || step === 3) {
    previousText = '上一步';
    previusArrow = <img src={arrowLeft} alt="" />;
  }
  if (step === 3) {
    nextText = '確認下單';
    nextArrow = null;
  }
  const previous = (
    <button className={style.previous} onClick={clickPrevious}>
      {previusArrow}
      {previousText}
    </button>
  );

  const next = (
    <button className={style.next} onClick={clickNext}>
      {nextText}
      {nextArrow}
    </button>
  );

  return (
    <div className={style.progressStep}>
      <div className={style.btnGroup}>
        {previous}
        {next}
      </div>
    </div>
  );
});

export default ProgressControl;
