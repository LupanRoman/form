import React from 'react';
import Thanks from '../assets/icon-thank-you.svg';

const Finish = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full relative md:w-full ">
        <div className="flex flex-col gap-4 md:gap-2 bg-alabaster p-5 rounded-lg absolute -top-20 md:top-0 md:bg-white md:p-0 md:pt-20 md:w-full text-center justify-center">
          <img
            src={Thanks}
            alt=""
            width={70}
            className="ml-auto mr-auto pt-10"
          />
          <h2 className="text-marine-blue font-extrabold text-xl md:text-3xl">
            Thank you!
          </h2>
          <p className="text-cool-gray text-sm md:text-base pb-10 ">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Finish;
