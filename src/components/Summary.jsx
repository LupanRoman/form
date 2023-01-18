import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full relative md:w-full">
        <div className="flex flex-col gap-4 md:gap-2 bg-alabaster p-5 rounded-lg absolute -top-20 md:top-0 md:bg-white md:p-0 md:pt-20 md:w-full">
          <h2 className="text-marine-blue font-extrabold text-xl md:text-3xl">
            Finishing up
          </h2>
          <p className="text-cool-gray text-sm md:text-base ">
            Double-check everything looks OK before confirming.
          </p>
          <div className="flex flex-col bg-magnolia p-3">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h6 className="font-bold text-marine-blue text-sm">
                  Arcade(Monthly)
                </h6>
                <Link to="/plan">
                  <p className="text-cool-gray text-xs underline">Change</p>
                </Link>
              </div>
              <p className="text-marine-blue font-bold text-sm">$9/mo</p>
            </div>
            <hr />
            <div className="flex justify-between pt-3 pb-3">
              <h6 className="text-sm text-cool-gray">Online service</h6>
              <p className="text-xs text-marine-blue">+$1/mo</p>
            </div>
            <div className="flex justify-between pt-3 pb-3">
              <h6 className="text-sm text-cool-gray">Larger storage</h6>
              <p className="text-xs text-marine-blue">+$2/mo</p>
            </div>
          </div>
          <div className="flex justify-between pl-3 pr-3">
            <h6 className="text-xs text-cool-gray">Total (per month)</h6>
            <p className="text-sm text-purplish-blue font-bold">+$12/mo</p>
          </div>
        </div>
        <div className="absolute bg-alabaster md:bg-transparent -bottom-5 md:-bottom-10 -right-5 -left-5 p-5 flex justify-between items-center">
          <Link to="/summary">
            <button className="text-cool-gray text-sm font-bold">
              Go Back
            </button>
          </Link>
          <Link to="/finish">
            <button className="bg-purplish-blue text-alabaster font-semibold text-sm pl-4 pr-4 pt-3 pb-3 rounded-md -right-10 ">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Summary;
