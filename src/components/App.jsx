// eslint-disable-next-line no-unused-vars
import React, { useState, memo } from 'react';
import '../css/style.scss';
import { Header } from './Header/index';
import { ProgressControl } from './ProgressControl/index';
import { Cart } from './Cart/index';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { StepProgress } from './StepProgress';
import { Footer } from './Footer/index';

const HeaderMemo = memo(Header);
const ProgressControlMemo = memo(ProgressControl);
const CartMeno = memo(Cart);
const Step1Memo = memo(Step1);
const Step2Memo = memo(Step2);
const Step3Memo = memo(Step3);
const StepProgressMemo = memo(StepProgress);
const FooterMemo = memo(Footer);

const App = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]);
  const [step, setStep] = useState(1);
  let showStep;
  if (step === 1) {
    showStep = <Step1Memo />;
  } else if (step === 2) {
    showStep = <Step2Memo />;
  } else if (step === 3) {
    showStep = <Step3Memo />;
  }

  return (
    <div className="App">
      <HeaderMemo />
      <main>
        <div className="left">
          <StepProgressMemo step={step} />
          {showStep}
          <ProgressControlMemo step={step} setStep={setStep} />
        </div>
        <div className="right">
          <CartMeno data={data} setData={setData} />
        </div>
      </main>
      <FooterMemo />
    </div>
  );
};

export default App;
