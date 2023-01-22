import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  let planType;
  const [plan, setPlan] = useState('');
  const [planPrice, setPlanPrice] = useState(0);
  const [boxState, setBoxState] = useState(true);
  const [priceArc, setPriceArc] = useState(9);
  const [priceAdv, setPriceAdv] = useState(12);
  const [pricePro, setPricePro] = useState(15);
  const [timePeriod, setTimePeriod] = useState('mo');
  const [optionOs, setOptionOs] = useState(true);

  const [os, setOs] = useState(1);
  const [ls, setLs] = useState(2);
  const [cp, setCp] = useState(2);

  const planSelection = (e) => {
    planType = e.target.id;
    setPlan(planType);
    if (planType == 'Arcade') {
      setPlanPrice(priceArc);
    } else if (planType == 'Advanced') {
      setPlanPrice(priceAdv);
    } else {
      setPlanPrice(pricePro);
    }
    // console.log(planType);
  };

  const changeData = (event) => {
    const promoArc = document.getElementById('promo-arc');
    const promoAdv = document.getElementById('promo-adv');
    const promoPro = document.getElementById('promo-pro');

    if (event.target.checked) {
      // console.log('yes');
      setPriceArc(90);
      setPriceAdv(120);
      setPricePro(150);

      setOs(10);
      setLs(20);
      setCp(20);

      setTimePeriod('yr');

      promoArc.style.display = 'flex';
      promoAdv.style.display = 'flex';
      promoPro.style.display = 'flex';
    } else {
      // console.log('no');
      setPriceArc(9);
      setPriceAdv(12);
      setPricePro(15);

      setOs(1);
      setLs(2);
      setCp(2);

      setTimePeriod('mo');

      promoArc.style.display = 'none';
      promoAdv.style.display = 'none';
      promoPro.style.display = 'none';
    }
    setBoxState((current) => !current);
    // console.log(boxState);
  };

  const addOn = (check) => {
    if (check.target.checked) {
      setOptionOs(true);
      console.log(optionOs);
      // TODO get the add-on name and price and output in the summary
    } else {
      console.log('error');
    }
  };

  // TODO Based on the plan and addons selected by the user sum the total amount they need to pay

  return (
    <StateContext.Provider
      value={{
        planSelection,
        changeData,
        plan,
        priceArc,
        priceAdv,
        pricePro,
        os,
        ls,
        cp,
        timePeriod,
        planPrice,
        addOn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
