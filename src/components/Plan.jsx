import React from 'react';
import Arcade from '../assets/icon-arcade.svg';
import Advanced from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';

const Plan = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-between relative">
        <div className="flex flex-col p-2 gap-4 bg-white rounded-md ">
          <h3 className="font-extrabold text-marine-blue text-2xl md:text-3xl md:p-0">
            Select your plan
          </h3>
          <p className="text-xs md:text-base lg:text-lg text-cool-gray">
            You have the option of monthly or yearly billing.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:w-full md:justify-between">
            <div className="plan-option flex gap-5">
              <img src={Arcade} alt="" />
              <div className="flex flex-col gap-1">
                <h5 className="font-bold text-marine-blue text-lg">Arcade</h5>
                <p className="text-xs text-cool-gray">$9/mo</p>
              </div>
            </div>
            <div className="plan-option flex gap-5 md:pr-16">
              <img src={Advanced} alt="" />
              <div className="flex flex-col gap-1">
                <h5 className="font-bold text-marine-blue text-lg">Advanced</h5>
                <p className="text-xs text-cool-gray">$12/mo</p>
              </div>
            </div>
            <div className="plan-option flex gap-5 md:pr-24">
              <img src={Pro} alt="" />
              <div className="flex flex-col gap-1">
                <h5 className="font-bold text-marine-blue text-lg">Pro</h5>
                <p className="text-xs text-cool-gray">$15/mo</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-3 bg-magnolia p-2 rounded-lg">
            <h4 className="md:ml-20">Monthly</h4>
            <div className="flex">
              <input
                type="checkbox"
                name="switch"
                id="switch"
                className="toggle"
              />
              <label htmlFor="switch" className="label"></label>
            </div>
            <h4 className="md:mr-20">Yearly</h4>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5">
          <p className="text-xs text-cool-gray font-bold cursor-pointer">
            Go Back
          </p>
          <button className="pl-5 pr-5 pt-2 pb-2 bg-marine-blue font-extrabold text-white rounded-md">
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default Plan;
