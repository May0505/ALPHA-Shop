// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../css/style.scss';
import { Header } from './Header/index';
import { ProgressControl } from './ProgressControl/index';
import { Cart } from './Cart/index';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { StepProgress } from './StepProgress';
import { Footer } from './Footer/index';

const App = () => {
  const [step, setStep] = useState(1);
  let showStep;
  if (step === 1) {
    showStep = <Step1 />;
  } else if (step === 2) {
    showStep = <Step2 />;
  } else if (step === 3) {
    showStep = <Step3 />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="left">
          <StepProgress step={step} />
          {showStep}
          <ProgressControl step={step} setStep={setStep} />
        </div>
        <div className="right">
          <Cart />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
