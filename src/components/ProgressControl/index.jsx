// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';
import arrowLeft from '../../assets/img/arrowLeft.svg';
import arrowRight from '../../assets/img/arrowRight.svg';

type ProgressControlFlow = {
  step: Number,
  setStep: Function,
};

export const ProgressControl: React.FC<ProgressControlFlow> = (props) => {
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
    <button className="previous" onClick={clickPrevious}>
      {previusArrow}
      {previousText}
    </button>
  );

  const next = (
    <button className="next" onClick={clickNext}>
      {nextText}
      {nextArrow}
    </button>
  );

  return (
    <div className="progressStep">
      <div className="btnGroup">
        {previous}
        {next}
      </div>
    </div>
  );
};
