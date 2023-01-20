import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  let planType;
  const [plan, setPlan] = useState('');
  const [boxState, setBoxState] = useState(true);
  const [priceArc, setPriceArc] = useState('9');
  const [priceAdv, setPriceAdv] = useState('12');
  const [pricePro, setPricePro] = useState('15');

  const planSelection = (e) => {
    planType = e.target.id;
    setPlan(planType);
    // console.log(planType);
  };

  const changeData = (event) => {
    const promoArc = document.getElementById('promo-arc');
    const promoAdv = document.getElementById('promo-adv');
    const promoPro = document.getElementById('promo-pro');

    if (event.target.checked) {
      // console.log('yes');
      setPriceArc('90');
      setPriceAdv('120');
      setPricePro('150');

      promoArc.style.display = 'flex';
      promoAdv.style.display = 'flex';
      promoPro.style.display = 'flex';
    } else {
      // console.log('no');
      setPriceArc('9');
      setPriceAdv('12');
      setPricePro('15');

      promoArc.style.display = 'none';
      promoAdv.style.display = 'none';
      promoPro.style.display = 'none';
    }
    setBoxState((current) => !current);
    // console.log(boxState);
  };

  const addOn = (check) => {
    const checked = check.target.checked;
    console.log(checked);
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
        addOn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
