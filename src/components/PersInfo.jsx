import React from 'react';
import { Link } from 'react-router-dom';

const PersInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full relative md:w-full">
        <div className="flex flex-col gap-4 md:gap-2 bg-alabaster p-5 rounded-lg absolute -top-20 md:top-0 md:bg-white md:p-0 md:pt-20 md:w-full">
          <h2 className="text-marine-blue font-extrabold text-xl md:text-3xl">
            Personal info
          </h2>
          <p className="text-cool-gray text-xs md:text-base ">
            Please provide your name, email address, and phone number.
          </p>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs md:text-base">
              Name
            </label>
            <input
              className="input text-sm md:text-base"
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Vanessa Mint"
            />
            <label htmlFor="email" className="text-xs md:text-base">
              Email Address
            </label>
            <input
              className="input text-sm md:text-base"
              type="email"
              name="email"
              id="email"
              placeholder="e.g. vanessamint@gmail.com"
            />
            <label htmlFor="number" className="text-xs md:text-base">
              Phone Number
            </label>
            <input
              className="input text-sm md:text-base"
              type="text"
              name="number"
              id="number"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
        <div className="absolute bg-alabaster md:bg-transparent -bottom-5 md:-bottom-10 -right-5 -left-5 p-5 flex justify-end">
          <Link to="/plan">
            <button className="bg-marine-blue text-alabaster font-semibold text-sm pl-4 pr-4 pt-3 pb-3 rounded-md -right-10 ">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PersInfo;
