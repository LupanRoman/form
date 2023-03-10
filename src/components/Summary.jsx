import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../context/StateContext';

const Summary = () => {
  const {
    plan,
    planPrice,
    timePeriod,
    onlineService,
    largerStorage,
    customProf,
    os,
    ls,
    cp,
    osChecked,
    lsChecked,
    cpChecked,
    theState,
  } = useContext(StateContext);
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
          <div className="flex flex-col bg-magnolia p-3 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h6 className="font-bold text-marine-blue text-sm">{plan}</h6>
                <Link to="/plan">
                  <p className="text-cool-gray text-xs underline">Change</p>
                </Link>
              </div>
              <p className="text-marine-blue font-bold text-sm">{`$${planPrice}/${timePeriod}`}</p>
            </div>
            <hr />

            {osChecked == true ? (
              <div
                className="flex justify-between pt-3 pb-3"
                id="OnlineService"
              >
                <h6 className="text-sm text-cool-gray">{onlineService}</h6>
                {osChecked == true ? (
                  <p className="text-xs text-marine-blue">{`$${os}/${timePeriod}`}</p>
                ) : null}
              </div>
            ) : null}

            {lsChecked == true ? (
              <div className="flex justify-between pt-3 pb-3">
                <h6 className="text-sm text-cool-gray">{largerStorage}</h6>
                {lsChecked == true ? (
                  <p className="text-xs text-marine-blue">{`$${ls}/${timePeriod}`}</p>
                ) : null}
              </div>
            ) : null}

            {cpChecked == true ? (
              <div className="flex justify-between pt-3 pb-3">
                <h6 className="text-sm text-cool-gray">{customProf}</h6>
                {cpChecked == true ? (
                  <p className="text-xs text-marine-blue">{`$${cp}/${timePeriod}`}</p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="flex justify-between pl-3 pr-3">
            <h6 className="text-xs text-cool-gray">Total (per month)</h6>
            {theState == true ? (
              <p className="text-sm text-purplish-blue font-bold">{`$${
                planPrice + os + ls + cp
              }/${timePeriod}`}</p>
            ) : (
              <p className="text-sm text-purplish-blue font-bold">0</p>
            )}
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
