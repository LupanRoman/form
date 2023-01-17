import React from 'react';

const PersInfo = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-between relative">
        <div className="flex flex-col p-5 gap-4 bg-white rounded-md">
          <h3 className="font-extrabold text-marine-blue text-2xl md:text-3xl md:p-0">
            Personal info
          </h3>
          <p className="text-xs md:text-base lg:text-lg text-cool-gray">
            Please provide your name, email address, and phone number
          </p>
          <div className="flex flex-col gap-3">
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Vanessa Mint"
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="e.g. vanessamint@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input
                className="input"
                type="text"
                name="number"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end bg-white p-5">
          <button className="pl-5 pr-5 pt-2 pb-2 bg-marine-blue font-extrabold text-white rounded-md">
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default PersInfo;
