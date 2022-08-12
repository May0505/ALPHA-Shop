// eslint-disable-next-line no-unused-vars
import React, { useState, memo, useMemo } from 'react';
import '../css/style.scss';
import Header from './Header/index';
import ProgressControl from './ProgressControl/index';
import Cart from './Cart/index';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepProgress from './StepProgress';
import Footer from './Footer/index';
import CartContext from './CartContext';
import data from './data/items';

const App = () => {
  const [step, setStep] = useState(1);
  const CartContextValue = useMemo(() => ({
    step,
    data,
  }));
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
        <CartContext.Provider value={CartContextValue}>
          <div className="left">
            <StepProgress step={step} />
            {showStep}
            <ProgressControl step={step} setStep={setStep} />
          </div>
          <div className="right">
            <Cart />
          </div>
        </CartContext.Provider>
      </main>
      <Footer />
    </div>
  );
};

export default App;
