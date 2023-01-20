import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../context/StateContext';

const AddOns = () => {
  const { addOn } = useContext(StateContext);
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full relative md:w-full">
        <div className="flex flex-col gap-4 md:gap-2 bg-alabaster p-5 rounded-lg absolute -top-20 md:top-0 md:bg-white md:p-0 md:pt-20 md:w-full">
          <h2 className="text-marine-blue font-extrabold text-xl md:text-3xl">
            Pick add-ons
          </h2>
          <p className="text-cool-gray text-xs md:text-base ">
            Add-ons help enhance your gaming experience
          </p>
          <div className="flex flex-col gap-3">
            <div className="option">
              <div className="flex gap-3">
                <input type="checkbox" name="" id="" className="check-add-on" onChange={addOn} />
                <div>
                  <h6 className="text-xs font-bold text-marine-blue">
                    Online service
                  </h6>
                  <p className="text-cool-gray">Access to multiplayer games</p>
                </div>
              </div>
              <p className="text-xs text-purplish-blue font-bold">+$1/mo</p>
            </div>
            <div className="option">
              <div className="flex gap-3">
                <input type="checkbox" name="" id="" className="check-add-on" />
                <div>
                  <h6 className="text-xs font-bold text-marine-blue">
                    Larger storage
                  </h6>
                  <p className="text-cool-gray">Extra 1TB of cloud save</p>
                </div>
              </div>
              <p className="text-xs text-purplish-blue font-bold">+$2/mo</p>
            </div>
            <div className="option">
              <div className="flex gap-3">
                <input type="checkbox" name="" id="" className="check-add-on" />
                <div>
                  <h6 className="text-xs font-bold text-marine-blue">
                    Customizable profile
                  </h6>
                  <p className="text-cool-gray">Custom theme on your profile</p>
                </div>
              </div>
              <p className="text-xs text-purplish-blue font-bold">+$2/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute bg-alabaster md:bg-transparent -bottom-5 md:-bottom-10 -right-5 -left-5 p-5 flex justify-between items-center">
            <Link to="/plan">
              <button className="text-cool-gray text-sm font-bold">
                Go Back
              </button>
            </Link>
            <Link to="/summary">
              <button className="bg-marine-blue text-alabaster font-semibold text-sm pl-4 pr-4 pt-3 pb-3 rounded-md -right-10 ">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
