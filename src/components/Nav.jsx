import React from 'react';
import ImgMob from '../assets/bg-sidebar-mobile.svg';

const Nav = () => {
  return (
    <>
      <div className="">
        <img
          src={ImgMob}
          alt="brand image for mobile screens"
          className="flex md:hidden w-full"
        />
        <div className="image"></div>
        {/* Links for navigation */}
        <div className="flex absolute top-5 left-20 right-16 justify-between md:flex-col md:gap-7 md:left-16 md:top-20 md:right-96 ">
          <div className="flex md:gap-4 items-center">
            <a href="/Plan">
              <button className="link-btn">1</button>
            </a>
            <p className="hidden md:flex md:flex-col text-xs text-pastel">
              STEP 1<br />
              <span className="text-white text-md font-extrabold">
                YOUR INFO
              </span>
            </p>
          </div>
          <div className="flex md:gap-4 items-center">
            <button className="link-btn">2</button>
            <p className="hidden md:flex md:flex-col text-xs text-pastel">
              STEP 2<br />
              <span className="text-white text-md font-extrabold">
                SELECT PLAN
              </span>
            </p>
          </div>
          <div className="flex md:gap-4 items-center">
            <button className="link-btn">3</button>
            <p className="hidden md:flex md:flex-col text-xs text-pastel">
              STEP 3<br />
              <span className="text-white text-md font-extrabold">ADD-ONS</span>
            </p>
          </div>
          <div className="flex md:gap-4 items-center">
            <button className="link-btn">4</button>
            <p className="hidden md:flex md:flex-col text-xs text-pastel">
              STEP 4<br />
              <span className="text-white text-md font-extrabold">SUMMARY</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
