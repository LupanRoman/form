import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Arcade from '../assets/icon-arcade.svg';
import Advanced from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';
import StateContext from '../../context/StateContext';

const Plan = () => {
  const { planSelection, changeData, priceArc, priceAdv, pricePro } =
    useContext(StateContext);

  return (
    <>
      <div className="flex flex-col justify-between items-center h-full relative md:w-full">
        <div className="flex flex-col gap-4 md:gap-2 bg-alabaster p-5 rounded-lg absolute -top-20 md:top-0 md:bg-white md:p-0 md:pt-20 md:w-full">
          <h2 className="text-marine-blue font-extrabold text-xl md:text-3xl">
            Select your plan
          </h2>
          <p className="text-cool-gray text-xs md:text-base ">
            You have the option of monthly or yearly billing.
          </p>
          <div className="plans flex flex-col gap-2 md:flex-row">
            <div
              className="plan-option flex gap-4 md:flex-col items-center"
              id="Arcade"
              onClick={planSelection}
            >
              <img src={Arcade} alt="" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-sm text-marine-blue">Arcade</h6>
                <p className="text-xs text-cool-gray" id="priceArc">
                  {`$${priceArc}/mo`}
                </p>
                <p className="hidden text-xs text-marine-blue" id="promo-arc">
                  2 months free
                </p>
              </div>
            </div>
            <div
              className="plan-option flex gap-4 items-center"
              id="Advanced"
              onClick={planSelection}
            >
              <img src={Advanced} alt="" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-sm text-marine-blue">Advanced</h6>
                <p className="text-xs text-cool-gray" id="priceAdv">
                  {`$${priceAdv}/mo`}
                </p>
                <p className="hidden text-xs text-marine-blue" id="promo-adv">
                  2 months free
                </p>
              </div>
            </div>
            <div
              className="plan-option flex gap-4 items-center"
              id="Pro"
              onClick={planSelection}
            >
              <img src={Pro} alt="" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-sm text-marine-blue">Pro</h6>
                <p className="text-xs text-cool-gray" id="pricePro">
                  {`$${pricePro}/mo`}
                </p>
                <p className="hidden text-xs text-marine-blue" id="promo-pro">
                  2 months free
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-center bg-magnolia pt-3 pb-3 pl-5 pr-5 rounded-lg">
            <h6 className="font-bold text-marine-blue">Monthly</h6>
            <div className="flex">
              <input
                type="checkbox"
                name="switch"
                id="switch"
                className="toggle"
                onChange={changeData}
              />
              <label htmlFor="switch" className="switch"></label>
            </div>
            <h6 className="font-bold text-marine-blue">Yearly</h6>
          </div>
        </div>
        <div className="absolute bg-alabaster md:bg-transparent -bottom-5 md:-bottom-10 -right-5 -left-5 p-5 flex justify-between items-center">
          <Link to="/">
            <button className="text-cool-gray text-sm font-bold">
              Go Back
            </button>
          </Link>
          <Link to="/add-ons">
            <button className="bg-marine-blue text-alabaster font-semibold text-sm pl-4 pr-4 pt-3 pb-3 rounded-md -right-10 ">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Plan;
