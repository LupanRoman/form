import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  let planType;

  const [plan, setPlan] = useState('');
  const [planPrice, setPlanPrice] = useState(0);
  const [boxState, setBoxState] = useState(true);
  const [timePeriod, setTimePeriod] = useState('mo');

  const [priceArc, setPriceArc] = useState(9);
  const [priceAdv, setPriceAdv] = useState(12);
  const [pricePro, setPricePro] = useState(15);

  const [os, setOs] = useState(1);
  const [ls, setLs] = useState(2);
  const [cp, setCp] = useState(2);

  const [onlineService, setOnlineService] = useState('');
  const [largerStorage, setLargerStorage] = useState('');
  const [customProf, setCustomProf] = useState('');

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
  };

  const changeData = (event) => {
    const promoArc = document.getElementById('promo-arc');
    const promoAdv = document.getElementById('promo-adv');
    const promoPro = document.getElementById('promo-pro');

    if (event.target.checked) {
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
  };

  // * Checking for the state of the checkbox
  const [theState, setTheState] = useState(true);
  const [osChecked, setOsChecked] = useState(false);
  const [lsChecked, setLsChecked] = useState(false);
  const [cpChecked, setCpChecked] = useState(false);

  const addAddOns = (check) => {
    const isChecked = check.target.checked;
    setTheState(isChecked);

    const theId = check.target.id;

    if (theState == true && theId == 'Online Service') {
      setOnlineService('Online service');
      setOsChecked(isChecked);
    } else if (theState == true && theId == 'Larger Storage') {
      setLargerStorage('Larger storage');
      setLsChecked(isChecked);
    } else if (theState == true && theId == 'Custom Prof') {
      setCustomProf('Customizable profile');
      setCpChecked(isChecked);
    }
  };

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
        addAddOns,
        theState,
        onlineService,
        largerStorage,
        customProf,
        osChecked,
        lsChecked,
        cpChecked,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
